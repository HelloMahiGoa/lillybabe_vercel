'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, MessageCircle, CheckCircle, AlertTriangle, Clock, Globe, FileText, Heart } from 'lucide-react';
import { trackPageView, trackEvent } from '@/components/analytics';

export function PrivacyPolicyClient() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    trackPageView('/privacy-policy', 'Privacy Policy - Chennai Escorts Service');
    trackEvent('page_view', 'privacy_policy', 'privacy_page');
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'information-collection', title: 'Information We Collect', icon: Database },
    { id: 'how-we-use', title: 'How We Use Information', icon: Users },
    { id: 'data-protection', title: 'Data Protection', icon: Shield },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Eye },
    { id: 'third-party', title: 'Third-Party Services', icon: Globe },
    { id: 'data-retention', title: 'Data Retention', icon: Clock },
    { id: 'your-rights', title: 'Your Rights', icon: CheckCircle },
    { id: 'contact', title: 'Contact Us', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    trackEvent('click', 'privacy_section', sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-bold">Privacy Protection</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Privacy <span className="text-pink-500">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy is our top priority. Learn how we protect your personal information and maintain complete discretion in all our services.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-pink-400" />
                <span>Your Privacy Matters</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4">Quick Navigation</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                            activeSection === section.id
                              ? 'bg-pink-600 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{section.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                
                {/* Introduction Section */}
                <section id="introduction" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <FileText className="h-8 w-8 text-pink-500" />
                      Introduction
                    </h2>
                    
                    <div className="prose prose-lg prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Welcome to LillyBabe, Chennai's most trusted escort service. We understand that privacy and discretion are of utmost importance to our clients. This Privacy Policy explains how we collect, use, protect, and handle your personal information when you use our services.
                      </p>
                      
                      <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/20 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Our Privacy Commitment</h3>
                            <p className="text-gray-300">
                              We are committed to protecting your privacy and maintaining the confidentiality of your personal information. Your trust is the foundation of our business, and we take this responsibility seriously.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Information Collection Section */}
                <section id="information-collection" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Database className="h-8 w-8 text-pink-500" />
                      Information We Collect
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                        <p className="text-gray-300 mb-4">We collect minimal personal information necessary to provide our services:</p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span><strong>Contact Information:</strong> Phone number, email address (optional)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span><strong>Age Verification:</strong> Confirmation that you are 18+ years old</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span><strong>Service Preferences:</strong> Type of service requested, location preferences</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span><strong>Communication Records:</strong> Messages exchanged through our secure channels</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Technical Information</h3>
                        <p className="text-gray-300 mb-4">We automatically collect certain technical information:</p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span><strong>Device Information:</strong> IP address, browser type, device type</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span><strong>Usage Data:</strong> Pages visited, time spent on site, interactions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span><strong>Location Data:</strong> General location (city level) for service area verification</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">What We DON'T Collect</h3>
                            <p className="text-gray-300">
                              We do not collect sensitive personal information such as full names, addresses, workplace details, financial information, or any other identifying details beyond what is absolutely necessary for service provision.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* How We Use Information Section */}
                <section id="how-we-use" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Users className="h-8 w-8 text-pink-500" />
                      How We Use Your Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Service Provision</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Matching you with appropriate escorts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Coordinating bookings and appointments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Providing customer support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Ensuring safety and security</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Communication</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Sending booking confirmations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Providing service updates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Responding to inquiries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Important service notifications</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-6 mt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Analytics and Improvement</h3>
                      <p className="text-gray-300 mb-4">We use aggregated, anonymous data to:</p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Improve our website and services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Analyze usage patterns and trends</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Enhance user experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Ensure platform security</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Data Protection Section */}
                <section id="data-protection" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Shield className="h-8 w-8 text-pink-500" />
                      Data Protection & Security
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Security Measures</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Lock className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">SSL Encryption</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Lock className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Secure Servers</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Lock className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Access Controls</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Lock className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Regular Backups</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Lock className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Monitoring Systems</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Lock className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Staff Training</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Privacy Guarantees</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                            <span><strong>No Data Sharing:</strong> We never sell, rent, or share your personal information with third parties</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                            <span><strong>Minimal Collection:</strong> We only collect information that is absolutely necessary</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                            <span><strong>Secure Storage:</strong> All data is stored on secure, encrypted servers</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                            <span><strong>Regular Deletion:</strong> Personal data is deleted after service completion</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Cookies Section */}
                <section id="cookies" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Eye className="h-8 w-8 text-pink-500" />
                      Cookies & Tracking
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Types of Cookies We Use</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-medium text-white mb-2">Essential Cookies</h4>
                            <p className="text-gray-300">Required for basic website functionality and security. These cannot be disabled.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white mb-2">Analytics Cookies</h4>
                            <p className="text-gray-300">Help us understand how visitors use our website to improve user experience.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white mb-2">Preference Cookies</h4>
                            <p className="text-gray-300">Remember your settings and preferences for a better browsing experience.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Cookie Management</h3>
                        <p className="text-gray-300 mb-4">
                          You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            Accept All Cookies
                          </button>
                          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                            Manage Preferences
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Third-Party Services Section */}
                <section id="third-party" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Globe className="h-8 w-8 text-pink-500" />
                      Third-Party Services
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Services We Use</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MessageCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="text-lg font-medium text-white">WhatsApp Business</h4>
                              <p className="text-gray-300">For secure communication. Messages are encrypted and not stored on our servers.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="text-lg font-medium text-white">Telecom Providers</h4>
                              <p className="text-gray-300">For phone communications. Call records are not stored by us.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="text-lg font-medium text-white">Email Services</h4>
                              <p className="text-gray-300">For email communications. Messages are deleted after service completion.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Important Note</h3>
                            <p className="text-gray-300">
                              We carefully select third-party services that prioritize privacy and security. All our partners are required to maintain the same level of confidentiality that we provide.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Data Retention Section */}
                <section id="data-retention" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Clock className="h-8 w-8 text-pink-500" />
                      Data Retention
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Retention Periods</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-4 bg-gray-600/50 rounded-lg">
                            <div>
                              <h4 className="text-lg font-medium text-white">Personal Information</h4>
                              <p className="text-gray-300">Contact details, preferences</p>
                            </div>
                            <span className="text-pink-400 font-semibold">30 days after service</span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-gray-600/50 rounded-lg">
                            <div>
                              <h4 className="text-lg font-medium text-white">Communication Records</h4>
                              <p className="text-gray-300">Messages, call logs</p>
                            </div>
                            <span className="text-pink-400 font-semibold">7 days after service</span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-gray-600/50 rounded-lg">
                            <div>
                              <h4 className="text-lg font-medium text-white">Analytics Data</h4>
                              <p className="text-gray-300">Anonymous usage statistics</p>
                            </div>
                            <span className="text-pink-400 font-semibold">12 months</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Automatic Deletion</h3>
                        <p className="text-gray-300 mb-4">
                          We have automated systems that permanently delete personal information after the specified retention periods. This ensures your data is not stored longer than necessary.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Daily automated deletion processes</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Secure data destruction methods</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Regular audit of deletion processes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Your Rights Section */}
                <section id="your-rights" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <CheckCircle className="h-8 w-8 text-pink-500" />
                      Your Rights
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Access & Control</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Right to Access:</strong> Request information about your data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Right to Correction:</strong> Update or correct your information</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Right to Deletion:</strong> Request immediate data deletion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Right to Portability:</strong> Export your data</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Privacy Controls</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Opt-out:</strong> Unsubscribe from communications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Cookie Control:</strong> Manage cookie preferences</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Data Minimization:</strong> Request minimal data collection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                            <span><strong>Complaint:</strong> Report privacy concerns</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-lg p-6 mt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">How to Exercise Your Rights</h3>
                      <p className="text-gray-300 mb-4">
                        To exercise any of your rights, simply contact us using the information provided in the Contact Us section. We will respond to your request within 48 hours.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                          Request Data Access
                        </button>
                        <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors">
                          Delete My Data
                        </button>
                        <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                          Contact Privacy Officer
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Mail className="h-8 w-8 text-pink-500" />
                      Contact Us
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Privacy Questions & Concerns</h3>
                        <p className="text-gray-300 mb-6">
                          If you have any questions about this Privacy Policy or concerns about how we handle your personal information, please don't hesitate to contact us.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <MessageCircle className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">WhatsApp</h4>
                            <p className="text-gray-300 mb-2">+91 81214 26651</p>
                            <a 
                              href="https://wa.me/918121426651" 
                              className="text-green-400 hover:text-green-300 transition-colors"
                              onClick={() => trackEvent('click', 'privacy_contact', 'whatsapp')}
                            >
                              Send Message
                            </a>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Phone className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                            <p className="text-gray-300 mb-2">+91 81214 26651</p>
                            <a 
                              href="tel:+918121426651" 
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                              onClick={() => trackEvent('click', 'privacy_contact', 'phone')}
                            >
                              Call Now
                            </a>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Mail className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                            <p className="text-gray-300 mb-2">info@lillybabe.com</p>
                            <a 
                              href="mailto:info@lillybabe.com" 
                              className="text-purple-400 hover:text-purple-300 transition-colors"
                              onClick={() => trackEvent('click', 'privacy_contact', 'email')}
                            >
                              Send Email
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-pink-900/20 to-red-900/20 border border-pink-500/20 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Privacy Officer</h3>
                        <p className="text-gray-300 mb-4">
                          For urgent privacy concerns or data protection issues, you can reach our dedicated Privacy Officer directly. We take all privacy matters seriously and will respond promptly to your concerns.
                        </p>
                        <div className="flex items-center gap-3">
                          <Shield className="h-6 w-6 text-pink-400" />
                          <span className="text-white font-medium">Response Time: Within 24 hours</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Policy Updates */}
                <section className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
                      <h3 className="text-xl font-semibold text-white mb-4">Policy Updates</h3>
                      <p className="text-gray-300 mb-4">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </motion.div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
