'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes: number;
  onComplete?: () => void;
  className?: string;
}

export const CountdownTimer = ({ 
  initialMinutes, 
  onComplete, 
  className = '' 
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // Convert to seconds
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsActive(false);
            onComplete?.();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeDisplay = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    if (hours > 0) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
            {hours.toString().padStart(2, '0')}
          </div>
          <span className="text-red-600 font-bold">:</span>
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
            {minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-red-600 font-bold">:</span>
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
            {seconds.toString().padStart(2, '0')}
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
          {minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-red-600 font-bold">:</span>
        <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
          {seconds.toString().padStart(2, '0')}
        </div>
      </div>
    );
  };

  if (timeLeft === 0) {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-red-800 text-white px-4 py-2 rounded-lg font-bold text-lg">
          ⏰ OFFER EXPIRED! ⏰
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="mb-2">
        <span className="text-red-600 font-bold text-lg">⏰ TIME LEFT: </span>
      </div>
      {getTimeDisplay()}
      <div className="mt-2 text-sm text-red-600 font-semibold">
        {timeLeft > 3600 ? 'HOURS : MINUTES : SECONDS' : 'MINUTES : SECONDS'}
      </div>
    </div>
  );
};
