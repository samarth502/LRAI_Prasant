import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Target, Users, Handshake, Shield, Sparkles, Brain, Code, ArrowRight
} from 'lucide-react';

// Framer Motion Variants for animations (Reusable)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slight delay for each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Inlined Premium AI Core SVG ---
const AICoreVector = () => (
    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-indigo-600 w-full h-auto max-h-96 md:max-h-[500px]"
    >
        {/* Abstract Background Grid/Network */}
        <motion.rect 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
            x="0" y="0" width="200" height="200" fill="url(#grid)" className="opacity-10"
        />
        <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
        </defs>

        {/* Central Brain/Core */}
        <motion.circle 
            initial={{ r: 0 }}
            animate={{ r: 35 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            cx="100" cy="100" r="35" fill="url(#coreGradient)" className="shadow-2xl"
        />
        <motion.circle 
            initial={{ r: 0 }}
            animate={{ r: 10 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100, delay: 0.5 }}
            cx="100" cy="100" r="10" fill="#FFFFFF"
        />

        {/* Outer Nodes and Connections (Dynamically animated) */}
        {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * 2 * Math.PI;
            const x = 100 + 75 * Math.cos(angle);
            const y = 100 + 75 * Math.sin(angle);
            
            return (
                <motion.g key={i}>
                    {/* Connection Line */}
                    <motion.line 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
                        x1="100" y1="100" x2={x} y2={y} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70"
                    />
                    {/* Outer Node */}
                    <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                        cx={x} cy={y} r="8" fill="currentColor" 
                    />
                </motion.g>
            );
        })}

        {/* Gradients for Premium Look */}
        <defs>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: "var(--tw-colors-indigo-400)" }} />
                <stop offset="100%" style={{ stopColor: "var(--tw-colors-purple-600)" }} />
            </radialGradient>
        </defs>
    </svg>
);


// Core Value Card Component
const ValueCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    variants={itemVariants}
  style={{
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, " +
      "rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, " +
      "rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
  }}    className="
      bg-white p-6 rounded-2xl shadow-xl border border-gray-100
      transition duration-300 hover:shadow-2xl hover:border-indigo-300
      flex flex-col items-center text-center h-full
    "
  >
    <div className="p-4 rounded-full bg-indigo-100 text-indigo-600 mb-4">
      <Icon size={32} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

// Main 'About Us' Page Component
const AboutUsPage = () => {
  const coreValues = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We push the boundaries in the field of AI, ensuring you always receive the most advanced and future-proof solutions.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Data privacy and security are our highest priorities. Your confidential data is safe and managed with the utmost integrity.',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We are not just vendors; we are dedicated technology partners committed to your long-term growth.',
    },
    {
        icon: Sparkles,
        title: 'Excellence',
        description: 'Ensuring premium quality and impeccable results in every project is our fundamental principle.',
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans antialiased text-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <main className="relative z-10 py-10 md:py-12 px-4 sm:px-6 lg:px-8 max-w-[97%] mx-auto">

        {/* 1. Hero Section - Mission & AI Vector */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-5">
            
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:pr-10"
            >
                <p className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-3"/>
                    Our Mission
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight
                           bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
                           drop-shadow-lg">
                    Empowering Your Potential Through AI.
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    We aim to equip enterprises with cutting-edge Artificial Intelligence (AI) solutions. We understand the critical importance of data, prioritizing security, privacy, and innovation in every AI initiative.
                </p>
                <p className="text-lg text-gray-600 mb-8 italic">
                    "Trust, Innovation, and Exceptional Results - This is Our Foundation."
                </p>
                <a href="#" className="inline-block">
                    <button className="
                      px-8 py-3 text-lg font-bold rounded-full
                      bg-gradient-to-r from-indigo-600 to-purple-700 text-white
                      shadow-lg shadow-indigo-400/50 hover:shadow-indigo-500/60
                      transform hover:-translate-y-0.5 transition duration-300 ease-in-out
                    ">
                      See Our Journey
                      <ArrowRight className="ml-2 w-5 h-5 inline-block"/>
                    </button>
                </a>
            </motion.div>

            {/* Right SVG Vector Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="p-4 bg-white rounded-3xl shadow-3xl flex items-center justify-center border border-gray-200"
            >
                <AICoreVector /> 
            </motion.div>
        </section>

        {/* 2. Core Values Section */}
        <section className="mb-10 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl font-bold text-center text-gray-800 mb-8"
          >
            Our Core Values
          </motion.h2>
          
          <motion.div
            variants={containerVariants} // Container for stagger animation
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </section>
        
        {/* 3. Team CTA Section */}
        <section className=" text-center bg-indigo-50 p-10 rounded-3xl border border-indigo-200 shadow-2xl">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Meet Our Exceptional Team.
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Our AI specialists, engineers, and strategists are dedicated to driving your success and achieving your goals.
            </p>
            <button className="
              px-10 py-4 text-xl font-bold rounded-full
              bg-gradient-to-r from-purple-600 to-pink-600 text-white
              shadow-lg shadow-purple-400/50 hover:shadow-purple-500/60
              transform hover:-translate-y-1 transition duration-300 ease-in-out
              tracking-wide
            ">
              The Team
              <Users className="ml-3 w-5 h-5 inline-block"/>
            </button>
        </section>

      </main>

      {/* Footer / CTA Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center "
      >
        <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AI Solutions Inc. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default AboutUsPage;
