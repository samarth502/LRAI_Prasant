
// import React from 'react';
// import { Target, Zap, TrendingUp, Layers, Aperture, BookOpen, Mic, Globe, FileText, BarChart2, Shield } from 'lucide-react';
// import { motion } from 'framer-motion';

// // Import necessary icons from 'lucide-react' (assuming you have them imported in the full component)
// // import { Aperture, Mic, Globe, FileText, BarChart2, Shield } from 'lucide-react'; 

// const productFeatures = [
//     {
//         icon: Globe,
//         title: "CorpGPT & GovtGPT",
//         tagline: "Secure Private AI for Institutional Knowledge.", 
//         description: "A secure private AI system designed to connect institutional repositories, providing real-time responses in natural language along with deep operational insights. Your data, your intelligence, totally secure.",
//         iconColor: "text-emerald-600",
//         ringColor: "border-emerald-500",
//         delay: 0.1,
//     },
//     {
//         icon: Aperture,
//         title: "RLAI Studio",
//         tagline: "The Visual AI Content & Interaction Hub.", 
//         description: "A comprehensive platform leveraging AI Avatars for unique Learning & Development experiences, 24/7 customer support/sales, and hyper-realistic marketing content generation.",
//         iconColor: "text-orange-600",
//         ringColor: "border-orange-500",
//         subFeatures: [
//             "AI Avatar L&D: 24/7 live courses with updated knowledge bases.",
//             "Visual Bots: Live Avatar-based customer support, sales buddy, and lead generation.",
//             "Media Generation: AI Avatar Marketing ADs, news videos, animated films, and music content.",
//         ],
//         delay: 0.2,
//     },
//     {
//         icon: Mic,
//         title: "RLAI Voice Platform",
//         tagline: "Scalable Multilingual AI Voice Agents.", 
//         description: "Multilingual, scalable AI Voice agent solution for Corporates and Government agencies, specializing in inbound and outbound Grievance handling, Feedback collection and comprehensive Customer support.",
//         iconColor: "text-blue-600",
//         ringColor: "border-blue-500",
//         delay: 0.3,
//     },
//     {
//         icon: FileText,
//         title: "RLAI DocIntel",
//         tagline: "Intelligent Document Processing & Insights.", 
//         description: "Specialized solution for reading complex documents, including those consisting of images. Allows users to ingest their documents for automated summarization, image-to-text reading, topic generation, and deep insights.",
//         iconColor: "text-red-600",
//         ringColor: "border-red-500",
//         delay: 0.4,
//     },
//     // --- NEW PRODUCT 1: Predictive Analytics ---
//     {
//         icon: BarChart2, // Assuming BarChart2 is available from lucide-react
//         title: "RLAI Predict",
//         tagline: "Advanced Predictive Modeling and Forecasting.", 
//         description: "Leverage state-of-the-art machine learning models to predict market trends, customer churn, and financial risks. Provides actionable insights for strategic decision-making and resource optimization.",
//         iconColor: "text-yellow-600",
//         ringColor: "border-yellow-500",
//         delay: 0.5,
//     },
//     // --- NEW PRODUCT 2: Security and Quantum Computing Ready ---
//     {
//         icon: Shield, // Assuming Shield is available from lucide-react
//         title: "RLAI Quantum Secure",
//         tagline: "Next-Generation Data Encryption & Anomaly Detection.", 
//         description: "An advanced security platform utilizing quantum-resistant encryption principles and AI-driven behavioral analysis for real-time anomaly detection, protecting sensitive data from both current and future threats.",
//         iconColor: "text-indigo-600",
//         ringColor: "border-indigo-500",
//         delay: 0.6,
//     },
//     {
//         icon: Globe, 
//         title: "AI City Solution (LOVAIC)",
//         tagline: "Patented Computer Vision for Smart Cities.", 
//         description: "Making nations better with our unique patented product LOVAIC (Low Vision AI Computation) computer vision solution, designed for comprehensive and efficient AI City management and monitoring.",
//         iconColor: "text-violet-600",
//         ringColor: "border-violet-500",
//         delay: 0.7, // Updated delay to place it at the end
//     },

//     {
//         icon: Zap, // Using Zap for energy/speed in experience
//         title: "RLAI Experience",
//         tagline: "Hyper-Personalization and Customer Journey Optimization.",
//         description: "Utilizes advanced behavioral AI to map customer journeys, predict satisfaction scores, and deliver individualized service recommendations and dynamic pricing, maximizing retention and revenue.",
//         iconColor: "text-pink-600",
//         ringColor: "border-pink-500",
//         delay: 0.6,
//     },
// ];
// // Framer Motion Variants
// const cardContainerVariants = {
//     visible: {
//         transition: {
//             staggerChildren: 0.1,
//         },
//     },
// };

// // const cardItemVariants = {
// //     hidden: { opacity: 0, y: 50, scale: 0.95 },
// //     visible: {
// //         opacity: 1,
// //         y: 0,
// //         scale: 1,
// //         transition: {
// //             duration: 0.6,
// //             ease: [0.17, 0.67, 0.83, 0.67], // Custom cubic-bezier for a snappier feel
// //         },
// //     },
// // };


// /**
//  * FeatureCard Component 
//  * Renders an individual, unique, and complex feature card.
//  */
// // 🔥 FIX APPLIED HERE: Added 'tagline' to the destructured props list
// const FeatureCard = ({ icon: Icon, title, tagline, description, iconColor, ringColor, subFeatures }) => (
//     <motion.div
     
//         className={`
//             p-0.5 rounded-3xl relative overflow-hidden
//             bg-white shadow-xl border border-gray-200
//             transition-all duration-500 ease-out
//             transform hover:shadow-2xl hover:scale-[1.02]
//             group
//             h-full
//             min-h-[380px]
//         `}
//         style={{
//             boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
//         }}
//     >
//         {/* Animated Accent Border */}
//         <div className={`
//             absolute inset-0 rounded-3xl p-0.5
//             transition-all duration-500 opacity-0 group-hover:opacity-100
//             ${ringColor.replace('border', 'border-4')} border-dashed
//             pointer-events-none
//         `}></div>

//         <div className={`
//             bg-white p-6 rounded-[1.8rem] h-full flex flex-col
//             transition-all duration-300
//         `}>
//             {/* Icon Container with Complex Animation/Styling */}
//             <div className={`
//                 w-16 h-16 flex items-center justify-center
//                 rounded-2xl mb-4 relative
//                 bg-gray-100/70 border-2 border-gray-200
//                 shadow-inner shadow-gray-300/50
//             `}>
//                 {/* Dashed Ring Effect */}
//                 <div className={`
//                     absolute w-full h-full p-1 rounded-2xl
//                     transition-all duration-500
//                     opacity-0 group-hover:opacity-100
//                     group-hover:rotate-6
//                 `}>
//                     <div className={`w-full h-full rounded-xl ${iconColor.replace('text', 'border')} border-dashed border opacity-50`}></div>
//                 </div>
                
//                 {/* The Icon */}
//                 <Icon 
//                     size={32} 
//                     className={`${iconColor} transition duration-500 group-hover:scale-110 relative z-10`} 
//                 />
//             </div>

//             <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
//                 {title}
//             </h3>
//             {/* Tagline is now rendered correctly */}
//             <p className="text-sm font-semibold mb-3 text-gray-500">{tagline}</p> 
            
//             <p className="text-gray-700 text-base leading-relaxed font-light mb-4 flex-grow">
//                 {description}
//             </p>

        
//         </div>
        
//         {/* Animated Corner Glare */}
//         <div className={`
//             absolute -top-10 -right-10 w-24 h-24 rounded-full 
//             ${iconColor.replace('text-', 'bg-')} opacity-10 
//             transition-all duration-500 transform scale-0 
//             group-hover:scale-100
//         `}></div>
//     </motion.div>
// );


// /**
//  * Main App Component 
//  */
// const ServiceAsSoft = () => {
//     return (
//         <div className="bg-gray-50 text-gray-900 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
            
//             {/* Background Gradient Blob 1 - Uses Framer Motion for a smooth perpetual background animation */}
//             <motion.div 
//                 animate={{
//                     x: [0, 50, 0],
//                     y: [0, -50, 0],
//                     rotate: [0, 360],
//                 }}
//                 transition={{
//                     duration: 12,
//                     repeat: Infinity,
//                     ease: "linear",
//                 }}
//                 className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
//             ></motion.div>
            
//             {/* Background Gradient Blob 2 */}
//             <motion.div
//                  animate={{
//                     x: [0, -40, 0],
//                     y: [0, 40, 0],
//                     rotate: [360, 0],
//                 }}
//                 transition={{
//                     duration: 10,
//                     repeat: Infinity,
//                     ease: "linear",
//                 }}
//                 className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
//             ></motion.div>


//             <div className="py-3  sm:px-6 lg:px-8 relative z-10">

//                 {/* Header Section */}
//                 <header className="text-center mb-16">
//                     <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-4">
//                         Our Unique Product Ecosystem
//                     </h2>
//                     <h1 className="uppercase text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 sm:text-6xl tracking-tight drop-shadow-sm">
//                      Our A.I. Solution Ecosystem  
//                     </h1>
//                     <p className="mt-4 max-w-4xl mx-auto text-xl text-gray-600 font-normal leading-relaxed">
//                         At Right Left AI, our mission is to make AI accessible to everyone. We believe in unleashing the power of artificial intelligence by combining human intuition with cutting-edge technology to solve complex challenges.
//                     </p>
//                 </header>

//                 {/* Features Grid - Framer Motion Applied (Scroll Triggered) */}
//                 <motion.div 
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
//                     variants={cardContainerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {productFeatures.map((feature) => (
//                         // FeatureCard is now receiving all its required props
//                         <FeatureCard 
//                             key={feature.title} 
//                             {...feature} 
//                             icon={feature.icon} 
//                             subFeatures={feature.subFeatures} 
//                         />
//                     ))}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default ServiceAsSoft;





import React, { useRef, useState, useEffect } from "react";
import {
  Zap,
  Aperture,
  Mic,
  Globe,
  FileText,
  BarChart2,
  Shield,
  Dot,
} from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";

const productFeatures = [
    {
    icon: Globe,
    title: "AI City Solution (LOVAIC)",
    tagline: "Patented Computer Vision for Smart Cities.",
    description:
      "Making nations better with our unique patented product LOVAIC (Low Vision AI Computation) computer vision solution, designed for comprehensive and efficient AI City management and monitoring.",
    iconColor: "text-violet-600",
    ringColor: "border-violet-500",
  },
  {
    icon: BarChart2,
    title: "RLAI Predict",
    tagline: "Advanced Predictive Modeling and Forecasting.",
    description:
      "Leverage state-of-the-art machine learning models to predict market trends, customer churn, and financial risks. Provides actionable insights for strategic decision-making and resource optimization.",
    iconColor: "text-yellow-600",
    ringColor: "border-yellow-500",
  },
    {
    icon: Aperture,
    title: "RLAI Studio",
    tagline: "The Visual AI Content & Interaction Hub.",
    description:
      "A comprehensive platform leveraging AI Avatars for unique Learning & Development experiences, 24/7 customer support/sales, and hyper-realistic marketing content generation.",
    iconColor: "text-orange-600",
    ringColor: "border-orange-500",
  },
  {
    icon: Globe,
    title: "CorpGPT & GovtGPT",
    tagline: "Secure Private AI for Institutional Knowledge.",
    description:
      "A secure private AI system designed to connect institutional repositories, providing real-time responses in natural language along with deep operational insights. Your data, your intelligence, totally secure.",
    iconColor: "text-emerald-600",
    ringColor: "border-emerald-500",
  },

  {
    icon: Mic,
    title: "RLAI Voice Platform",
    tagline: "Scalable Multilingual AI Voice Agents.",
    description:
      "Multilingual, scalable AI Voice agent solution for Corporates and Government agencies, specializing in inbound and outbound Grievance handling, Feedback collection and comprehensive Customer support.",
    iconColor: "text-blue-600",
    ringColor: "border-blue-500",
  },
  {
    icon: FileText,
    title: "RLAI DocIntel",
    tagline: "Intelligent Document Processing & Insights.",
    description:
      "Specialized solution for reading complex documents, including those consisting of images. Allows users to ingest their documents for automated summarization, image-to-text reading, topic generation, and deep insights.",
    iconColor: "text-red-600",
    ringColor: "border-red-500",
  },
  
 
  

];

// Individual Feature Card
const FeatureCard = ({
  icon: Icon,
  title,
  tagline,
  description,
  iconColor,
  ringColor,
}) => (
  <motion.div
    className="p-0.5 rounded-3xl relative overflow-hidden flex-shrink-0
      bg-white shadow-xl border border-gray-200 transition-all duration-500
      transform hover:shadow-2xl hover:scale-[1.02] group h-full w-[300px] sm:w-[350px]"
    style={{
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 30px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
      minHeight: "400px",
    }}
  >
    <div
      className={`absolute inset-0 rounded-3xl p-0.5 transition-all duration-500 opacity-0 group-hover:opacity-100 ${ringColor.replace(
        "border",
        "border-4"
      )} border-dashed pointer-events-none`}
    />
    <div className="bg-white p-6 rounded-[1.8rem] h-full flex flex-col transition-all duration-300">
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-4 relative bg-gray-100/70 border-2 border-gray-200 shadow-inner shadow-gray-300/50">
        <Icon
          size={32}
          className={`${iconColor} transition duration-500 group-hover:scale-110 relative z-10`}
        />
      </div>
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-sm font-semibold mb-3 text-gray-500">{tagline}</p>
      <p className="text-gray-700 text-base leading-relaxed font-light mb-4 flex-grow">
        {description}
      </p>
    </div>
  </motion.div>
);

const ServiceAsSoft = () => {
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 30; // smaller = slower

  // Smooth infinite scroll logic
  useEffect(() => {
    let controls;
    let animationFrame;

    const animateScroll = () => {
      controls = animate(x, -5000, {
        duration: scrollSpeed,
        ease: "linear",
      });

      controls.then(() => {
        x.set(0); // reset when reaches end
        animateScroll(); // restart
      });
    };

    if (!isHovered) {
      animateScroll();
    }

    return () => {
      if (controls) controls.stop();
      cancelAnimationFrame(animationFrame);
    };
  }, [isHovered, x, scrollSpeed]);

  return (
    <div
    
      className="bg-gray-50 text-gray-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating background colors */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0], rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0], rotate: [360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
      />

      <div className="relative z-10 w-full max-w-[98%] px-4 sm:px-8">

        <header className="text-center mb-2 py-4">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-1">
            Our Unique Product Ecosystem
          </h2>
          <h1 className="uppercase text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 sm:text-6xl tracking-tight drop-shadow-sm">
            Our A.I. Solution Ecosystem
          </h1>
          <p className="mt-4 max-w-4xl mx-auto text-xl text-gray-600 font-normal leading-relaxed">
            At Right Left AI, our mission is to make AI accessible to everyone.
            We believe in unleashing the power of artificial intelligence by
            combining human intuition with cutting-edge technology to solve
            complex challenges.
          </p>
        </header>




        {/* Continuous Scrolling Carousel */}
        <div   onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className="overflow-hidden py-4">
          <motion.div
            ref={carouselRef}
            className="flex gap-8 cursor-default justify-start"
            style={{ x }}
          >
            {[...productFeatures, ...productFeatures].map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </motion.div>
        </div>

        {/* Dots (static for design) */}
        <div className="flex justify-center mt-10 space-x-2">
          {productFeatures.map((_, index) => (
            <button
              key={index}
              className="p-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
            >
              <Dot size={20} className="text-white opacity-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAsSoft;
