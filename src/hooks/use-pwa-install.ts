'use client';

import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const usePWAInstall = (mode: 'modal' | 'banner' = 'banner') => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [canShowModal, setCanShowModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [userDismissed, setUserDismissed] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Check if user has previously dismissed the modal
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    const dismissedDate = localStorage.getItem('pwa-install-dismissed-date');
    
    if (dismissed === 'true' && dismissedDate) {
      const daysSinceDismissed = (Date.now() - parseInt(dismissedDate)) / (1000 * 60 * 60 * 24);
      // Only show again after 7 days
      if (daysSinceDismissed < 7) {
        setUserDismissed(true);
        return;
      } else {
        // Clear old dismissal data
        localStorage.removeItem('pwa-install-dismissed');
        localStorage.removeItem('pwa-install-dismissed-date');
      }
    }

    // Check if we've already shown the modal in this session
    const sessionShown = sessionStorage.getItem('pwa-install-shown');
    if (sessionShown === 'true') {
      setHasShownModal(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setCanShowModal(true);
      
      // Only show modal/banner if we haven't shown it before and user hasn't dismissed
      if (!hasShownModal && !userDismissed) {
        // Show install prompt after user has been engaged for a while
        setTimeout(() => {
          if (!isInstalled && !hasShownModal) {
            if (mode === 'modal') {
              setShowInstallModal(true);
            } else {
              setShowInstallBanner(true);
            }
            setHasShownModal(true);
            sessionStorage.setItem('pwa-install-shown', 'true');
          }
        }, 10000); // Show after 10 seconds of engagement
      }
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallModal(false);
      setShowInstallBanner(false);
      setDeferredPrompt(null);
      // Clear session storage when app is installed
      sessionStorage.removeItem('pwa-install-shown');
      localStorage.removeItem('pwa-install-dismissed');
      localStorage.removeItem('pwa-install-dismissed-date');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [hasShownModal, userDismissed, isInstalled]);

  const installApp = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        // Clear session storage when user accepts
        sessionStorage.removeItem('pwa-install-shown');
        localStorage.removeItem('pwa-install-dismissed');
        localStorage.removeItem('pwa-install-dismissed-date');
      } else {
        console.log('User dismissed the install prompt');
        // Don't show again for 7 days when user dismisses
        localStorage.setItem('pwa-install-dismissed', 'true');
        localStorage.setItem('pwa-install-dismissed-date', Date.now().toString());
      }
      
      setDeferredPrompt(null);
      setShowInstallModal(false);
      setShowInstallBanner(false);
    } catch (error) {
      console.error('Error installing app:', error);
    }
  };

  const closeModal = () => {
    setShowInstallModal(false);
    setShowInstallBanner(false);
    // Don't show again for 7 days when user closes modal/banner
    localStorage.setItem('pwa-install-dismissed', 'true');
    localStorage.setItem('pwa-install-dismissed-date', Date.now().toString());
  };

  const showModal = () => {
    if (canShowModal && !isInstalled && !hasShownModal && !userDismissed) {
      if (mode === 'modal') {
        setShowInstallModal(true);
      } else {
        setShowInstallBanner(true);
      }
      setHasShownModal(true);
      sessionStorage.setItem('pwa-install-shown', 'true');
    }
  };

  return {
    showInstallModal,
    showInstallBanner,
    isInstalled,
    installApp,
    closeModal,
    showModal,
    canInstall: !!deferredPrompt,
    canShowModal: canShowModal && !hasShownModal && !userDismissed
  };
};