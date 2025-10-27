import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, User, MessageSquare, Briefcase, CheckCircle
} from 'lucide-react';

// Framer Motion Variants
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Custom Hook for Form Submission State
const useFormState = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        // --- REAL EMAIL SUBMISSION INTEGRATION POINT ---
        // To send data to samatrydebl@gmail.com, you MUST integrate a backend service here.
        // Recommended services include:
        // 1. Formspree: Easiest setup for static sites.
        // 2. EmailJS: Send emails directly from JS (requires service setup).
        // 3. Serverless Function (e.g., Firebase Cloud Function, AWS Lambda) that calls a mailing API (like SendGrid).
        
        // EXAMPLE MOCK API CALL:
        console.log("Form Data Submitted:", formData);

        try {
            // Simulate network delay and successful submission
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            
            // If using Formspree, you would fetch here:
            /*
            const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
            } else {
                throw new Error('Server error');
            }
            */
            
            // Mock Success:
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
            
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus('error');
        }

        // Reset status after a delay for the user to see the message
        setTimeout(() => {
            setStatus('idle');
        }, 5000); 
    };

    return { formData, status, handleChange, handleSubmit };
};

// Input Field Component
const InputField = ({ icon: Icon, id, label, type = 'text', required = true, children, ...props }) => (
    <div className="relative mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Icon size={16} className="mr-2 text-indigo-500" />
            {label} {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {type === 'textarea' ? (
            <textarea
                id={id}
                name={id}
                rows="4"
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none bg-gray-50 text-gray-800"
                placeholder={label}
                {...props}
            />
        ) : (
            <input
                id={id}
                name={id}
                type={type}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-50 text-gray-800"
                placeholder={label}
                {...props}
            />
        )}
    </div>
);

// Main Contact Form Component
const ContactFormPageMain = () => {
  const { formData, status, handleChange, handleSubmit } = useFormState();

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={pageVariants}
      className="bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans antialiased text-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <main className="relative z-10 py-16 md:py-10 px-4 sm:px-6 lg:px-8 max-w-[97%] mx-auto">
        
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-lg font-semibold text-indigo-600 mb-2">
            GET IN TOUCH
          </p>
          <h1 className=" uppercase text-5xl md:text-6xl font-extrabold tracking-tight leading-tight
                     bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
                     drop-shadow-md">
            Let's Start the Conversation.
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
            We are here to answer your questions and help you transform your business with AI technology.
          </p>
        </motion.div>

        {/* Contact Card Container */}
        <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-3">
          
          {/* Left Panel - Contact Info */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-10 md:p-12 text-white flex flex-col justify-between">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-indigo-100 mb-8">
              Reach out to us directly or fill out the form, and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-start">
                <Mail size={24} className="flex-shrink-0 mr-4 text-indigo-200 mt-1" />
                <div>
                  <h4 className="font-semibold text-xl">Email</h4>
                  <a href="mailto:info@aisolutions.com" className="text-indigo-100 hover:text-white transition duration-200">
                    info@aisolutions.com
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-start">
                <Phone size={24} className="flex-shrink-0 mr-4 text-indigo-200 mt-1" />
                <div>
                  <h4 className="font-semibold text-xl">Phone</h4>
                  <a href="tel:+1-555-123-4567" className="text-indigo-100 hover:text-white transition duration-200">
                    +1 (555) 123-4567
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-start">
                <MapPin size={24} className="flex-shrink-0 mr-4 text-indigo-200 mt-1" />
                <div>
                  <h4 className="font-semibold text-xl">Office</h4>
                  <p className="text-indigo-100">123 Tech Drive, Silicon Valley, CA 94043</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 pt-6 border-t border-indigo-500/50">
                <p className="text-sm text-indigo-200">Working Hours: Mon - Fri, 9:00 AM - 5:00 PM (PST)</p>
            </div>
          </div>

          {/* Right Panel - The Form */}
          <div className="lg:col-span-2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <motion.div variants={itemVariants}>
                    <InputField
                        icon={User}
                        id="name"
                        label="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <InputField
                        icon={Mail}
                        id="email"
                        label="Your Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <InputField
                    icon={Briefcase}
                    id="subject"
                    label="Subject / Project Scope"
                    value={formData.subject}
                    onChange={handleChange}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <InputField
                    icon={MessageSquare}
                    id="message"
                    label="Your Detailed Message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`
                    w-full px-8 py-3 text-lg font-bold rounded-xl flex items-center justify-center
                    shadow-xl transition duration-300 ease-in-out transform
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:shadow-2xl hover:scale-[1.005]'}
                    ${isSuccess ? 'bg-green-500 hover:shadow-none cursor-default' : ''}
                  `}
                >
                  {isSubmitting && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {isSuccess ? (
                    <>
                        <CheckCircle className="w-5 h-5 mr-3"/>
                        Message Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-3 w-5 h-5"/>
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="mt-4 text-center text-red-600 font-semibold"
                    >
                        Failed to send the message. Please try again or contact us via email.
                    </motion.p>
                )}

              </motion.div>

            </form>
          </div>
        </motion.div>

      </main>

    </motion.div>
  );
};

export default ContactFormPageMain;
