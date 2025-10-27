import React from 'react';
import {
  Brain, Lock, MonitorPlay, Zap, Settings, Eye, BarChart3, Headset, Megaphone, ArrowRight, Star
} from 'lucide-react';

// सेवा डेटा संरचना (Data structure for all services)
const services = [
  {
    icon: Lock,
    title: 'Private Org Chatbot',
    description: 'Providing ChatBot solutions which exists privately on your premise and secure data conversation linking to your own database and documents.',
  },
  {
    icon: MonitorPlay,
    title: 'GEN AI For Content Creation',
    description: 'Create your own Learning & Training Plan using AI Avatars which can talk speak one to one providing knowledgeable information.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Create your own customised AI powered solutions using Machine Learning Capabilities like Fraud Detection, Recommendations and Forecasting etc.',
  },
  {
    icon: Zap,
    title: 'Agentic AI Automation',
    description: 'Use Agentic AI solutions to automate your business which can get trigger from WhatsApp, Telegram, Google Sheets and Mails also.',
  },
  {
    icon: Settings,
    title: 'Internet Of Things (IoT)',
    description: 'Connect your device to AI making it intelligent and capable of processing real-time data for automated decision-making and optimal performance.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Our Award winning LOVAIC solutions can help to achieve any image or video-based computer vision solution, from object tracking to quality control.',
  },
  {
    icon: BarChart3,
    title: 'AI Data Analytics',
    description: 'Capturing Intelligence from Data and Documents, transforming raw information into actionable insights for strategic planning.',
  },
  {
    icon: Headset,
    title: 'Virtual Assistants',
    description: 'Customized AI Bot as per your need, providing seamless support and task automation across various platforms and applications.',
  },
  {
    icon: Megaphone,
    title: 'GEN AI Marketing',
    description: 'AI Avtaar based Content generation of text, audio, image and video for Organisation, products / celebrities.',
  },
];

// सेवा कार्ड कंपोनेंट (Service Card Component)
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div   style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
 className="
    /* Ultra-premium card styling with glassmorphic effect */
    relative bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-3xl
    transform hover:scale-[1.03] transition duration-300 ease-in-out
    border border-white hover:border-indigo-300
    flex flex-col h-full
    overflow-hidden
    group
  ">
    {/* Subtle gradient overlay for premium feel */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-0 opacity-100 transition-opacity duration-300 rounded-3xl z-0"></div>

    <div className="relative z-10 flex items-center space-x-4 mb-4">
      {/* Icon with a distinct, glowing background effect */}
      <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
        <Icon size={32} strokeWidth={2.5} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-indigo-800 transition-colors duration-300">{title}</h3>
    </div>
    <p className="relative z-10 text-gray-700 text-base mb-6 flex-grow leading-relaxed">
      {description}
    </p>
    {/* Learn More link with enhanced hover effect */}
   
 
  </div>
);

// मुख्य सेवा पृष्ठ कंपोनेंट (Main Service Page Component)
const ServicesOne = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans antialiased text-gray-900 overflow-hidden">
      {/* Enhanced background effects for unique design */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <main className="relative z-10 py-12 md:py-5 px-4 sm:px-6 lg:px-8 max-w-[98%] mx-auto">

        {/* Header/Hero Section - More prominent and engaging */}
        <header className="text-center mb-10 md:mb-6">
          <h1 className="text-6xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight
                       bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
                       drop-shadow-lg animate-fade-in-up">
            Unleash the Future with <br className="hidden md:inline"/> Revolutionary AI Solutions
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed font-light animate-fade-in-up animation-delay-500">
            Discover our **cutting-edge AI services** designed to elevate your business, enhance efficiency, and unlock unparalleled innovation.
          </p>
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-300 text-indigo-700 font-medium text-lg shadow-lg animate-scale-in animation-delay-1000">
            <Star className="w-5 h-5 mr-3 fill-indigo-500" />
            Pioneering Intelligence
          </div>
        </header>

        {/* Services Grid with a unique layout and spacing */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </section>

      </main>

      {/* Footer / CTA Section - More impactful */}
      <footer className="relative z-10 py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-gray-200 mt-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Innovate?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's build intelligent solutions tailored for your success.
        </p>
        <button className="
          px-10 py-4 text-xl font-bold rounded-full
          bg-gradient-to-r from-indigo-600 to-purple-700 text-white
          shadow-xl shadow-indigo-400/50 hover:shadow-indigo-500/60
          transform hover:-translate-y-1 transition duration-300 ease-in-out
          tracking-wide
        ">
          Schedule Your AI Consultation
        </button>
      </footer>
    </div>
  );
};

export default ServicesOne;
