'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, CheckCircle, Clock, Globe, Mail, Phone, MessageCircle, Heart, Scale } from 'lucide-react';
import { trackPageView, trackEvent } from '@/components/analytics';

export function TermsConditionsClient() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    trackPageView('/terms-conditions', 'Terms & Conditions - Chennai Escorts Service');
    trackEvent('page_view', 'terms_conditions', 'terms_page');
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'service-description', title: 'Service Description', icon: Users },
    { id: 'user-responsibilities', title: 'User Responsibilities', icon: Shield },
    { id: 'booking-terms', title: 'Booking Terms', icon: CheckCircle },
    { id: 'payment-terms', title: 'Payment Terms', icon: Scale },
    { id: 'cancellation', title: 'Cancellation Policy', icon: AlertTriangle },
    { id: 'liability', title: 'Liability & Disclaimers', icon: Shield },
    { id: 'prohibited-activities', title: 'Prohibited Activities', icon: AlertTriangle },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: Globe },
    { id: 'termination', title: 'Termination', icon: Clock },
    { id: 'governing-law', title: 'Governing Law', icon: Scale },
    { id: 'contact', title: 'Contact Us', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    trackEvent('click', 'terms_section', sectionId);
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
            <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full mb-6">
              <Scale className="h-5 w-5 text-white" />
              <span className="text-white font-bold">Legal Terms</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Terms & <span className="text-pink-500">Conditions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services. By using LillyBabe, you agree to be bound by these terms.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-pink-400" />
                <span>Fair & Transparent</span>
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
                        Welcome to LillyBabe, Chennai's premier escort service. These Terms and Conditions ("Terms") govern your use of our services and website. By accessing or using our services, you agree to be bound by these Terms.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-3">
                          <Scale className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Agreement to Terms</h3>
                            <p className="text-gray-300">
                              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        These Terms constitute a legally binding agreement between you and LillyBabe. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Service Description Section */}
                <section id="service-description" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Users className="h-8 w-8 text-pink-500" />
                      Service Description
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
                        <p className="text-gray-300 mb-4">LillyBabe provides professional escort and companionship services in Chennai, including:</p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Professional companionship services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Social escort services for events and occasions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Travel companionship</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Discrete and confidential services</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Service Standards</h3>
                            <p className="text-gray-300">
                              All our services are provided by verified, professional escorts who maintain the highest standards of discretion, safety, and professionalism. We ensure all interactions are consensual and respectful.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* User Responsibilities Section */}
                <section id="user-responsibilities" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Shield className="h-8 w-8 text-pink-500" />
                      User Responsibilities
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Age Verification</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>You must be at least 18 years old to use our services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>You must provide valid age verification when requested</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>False age information will result in immediate service termination</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Conduct Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Treat all escorts with respect and dignity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Maintain appropriate boundaries and behavior</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Follow all safety guidelines and protocols</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Respect privacy and confidentiality</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Important Notice</h3>
                            <p className="text-gray-300">
                              Any violation of these conduct requirements may result in immediate termination of services and potential legal action. We take the safety and well-being of our escorts very seriously.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Booking Terms Section */}
                <section id="booking-terms" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <CheckCircle className="h-8 w-8 text-pink-500" />
                      Booking Terms
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Booking Process</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                            <div>
                              <h4 className="text-lg font-medium text-white">Initial Contact</h4>
                              <p className="text-gray-300">Contact us via phone, WhatsApp, or email to discuss your requirements</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                            <div>
                              <h4 className="text-lg font-medium text-white">Service Discussion</h4>
                              <p className="text-gray-300">We'll discuss your preferences, availability, and service details</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                            <div>
                              <h4 className="text-lg font-medium text-white">Confirmation</h4>
                              <p className="text-gray-300">Once details are confirmed, we'll provide booking confirmation</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                            <div>
                              <h4 className="text-lg font-medium text-white">Service Delivery</h4>
                              <p className="text-gray-300">Our escort will arrive at the agreed time and location</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Booking Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Valid contact information for communication</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Age verification (18+ years)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Clear service requirements and preferences</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Agreed meeting location and time</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Payment Terms Section */}
                <section id="payment-terms" className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Scale className="h-8 w-8 text-pink-500" />
                      Payment Terms
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Cash (Preferred)</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Digital Payments</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Bank Transfer</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">UPI Payments</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Mobile Wallets</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span className="text-gray-300">Other Methods</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Payment Terms</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Payment is due at the time of service delivery</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>All prices are final and non-negotiable after booking confirmation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Additional charges may apply for extended services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Travel expenses are separate and will be discussed beforehand</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Payment Security</h3>
                            <p className="text-gray-300">
                              All payment transactions are handled securely and confidentially. We do not store payment information on our servers, and all financial data is processed through secure, encrypted channels.
                            </p>
                          </div>
                        </div>
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
                        <h3 className="text-xl font-semibold text-white mb-4">Questions About Terms</h3>
                        <p className="text-gray-300 mb-6">
                          If you have any questions about these Terms and Conditions, please contact us using the information below.
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
                              onClick={() => trackEvent('click', 'terms_contact', 'whatsapp')}
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
                              onClick={() => trackEvent('click', 'terms_contact', 'phone')}
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
                              onClick={() => trackEvent('click', 'terms_contact', 'email')}
                            >
                              Send Email
                            </a>
                          </div>
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
                      <h3 className="text-xl font-semibold text-white mb-4">Terms Updates</h3>
                      <p className="text-gray-300 mb-4">
                        We may update these Terms and Conditions from time to time to reflect changes in our services or legal requirements. We will notify you of any significant changes by posting the updated terms on our website.
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
