"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Can I request specific preferences for the Chennai Escort Girl I want to meet?',
    answer: 'Absolutely! You can definitely request specific preferences for the Chennai Escort Girl you want to meet, such as age, ethnicity, and physical attributes. We want to make sure you find the perfect match for your Chennai Escorts Service experience!'
  },
  {
    question: 'Are your Chennai Escort Girls experienced and knowledgeable about the local area?',
    answer: 'Yes! Our Chennai Escort Girls are super experienced and know all the best places in Chennai! They can provide amazing recommendations for places to visit and make your Chennai Escorts Service experience even more special!'
  },
  {
    question: 'Do your Chennai Escort Girls offer overnight or travel companionship services?',
    answer: 'Absolutely! Our Chennai Escort Girls offer overnight and travel companionship services for clients who need longer-term arrangements. Our Chennai Escorts Service is flexible and designed to meet all your needs!'
  },
  {
    question: 'Are your Chennai Escort Girls available for social events or parties?',
    answer: 'Yes! Our Chennai Escort Girls are perfect for accompanying you to social events or parties as your date. They\'re professional, charming, and will make your Chennai Escorts Service experience truly memorable!'
  },
  {
    question: 'How do you ensure the safety and security of your Chennai Escort Girls?',
    answer: 'We take the safety and security of our Chennai Escort Girls very seriously! We have strict protocols in place to protect their well-being and ensure your Chennai Escorts Service experience is completely safe and secure for everyone involved.'
  },
  {
    question: 'What is your payment policy for Chennai Escorts Service?',
    answer: 'We believe in trust and transparency. You only pay after meeting your chosen Chennai Escort Girl. No advance payments, no hidden charges - just honest service. We only need your hotel confirmation details to ensure a smooth experience.'
  },
  {
    question: 'How far in advance should I book a Chennai Escort?',
    answer: 'We offer instant Chennai Escorts Service! No advance booking required. Simply contact us with your requirements and we\'ll arrange for your perfect companion to reach you at your preferred location within the specified time.'
  },
  {
    question: 'Are all your Chennai Escort Girls verified and authentic?',
    answer: 'Yes! All our Chennai Escort Girls are 100% verified and authentic. We personally know every single girl - they\'re not just profiles, they\'re amazing people who genuinely care about making your time special.'
  },
  {
    question: 'What areas in Chennai do you provide escort services?',
    answer: 'We provide premium Chennai Escorts Service across all major areas including T-Nagar, Adyar, OMR, Anna Nagar, ECR, Kilpauk, Velachery, Porur, Nungambakkam, Mylapore, Tambaram, Pallavaram, Guindy, Chrompet, Thoraipakkam, and Besant Nagar.'
  },
  {
    question: 'Do you offer both incall and outcall services?',
    answer: 'Yes! We offer both incall and outcall services. Whether you prefer to visit our location or have the escort come to your hotel room, we can accommodate your preferences for the most convenient Chennai Escorts Service experience.'
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions About Our Chennai Escorts Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to the most frequently asked questions about our premium Chennai escorts service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-pink-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Our friendly team is here to help! Contact us for any additional questions about our Chennai Escorts Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
