// import React from 'react';
// import { Target, Zap, TrendingUp, Layers } from 'lucide-react';

// // Data for the four feature cards (updated for light theme)
// const features = [
//   {
//     icon: Target,
//     title: "Outcome-Focused Metrics",
//     description: "Every AI Agent is designed to drive specific, measurable business outcomes with clear KPIs and performance indicators.",
//     iconColor: "text-emerald-600",
//     ringColor: "border-emerald-500",
//   },
//   {
//     icon: Zap,
//     title: "Service As a Software",
//     description: "Our Agentic AI operates as intelligent services that continuously learn, adapt, and optimize your business processes autonomously.",
//     iconColor: "text-orange-600",
//     ringColor: "border-orange-500",
//   },
//   {
//     icon: TrendingUp,
//     title: "Real-Time Performance Tracking",
//     description: "Monitor ROI, efficiency gains, and operational improvements in real-time across all your AI-powered workflows.",
//     iconColor: "text-blue-600",
//     ringColor: "border-blue-500",
//   },
//   {
//     icon: Layers,
//     title: "Industry-Specific Optimization",
//     description: "Tailored metrics and outcomes specifically designed for Travel, Transport, Hospitality, Logistics, and Telecom sectors.",
//     iconColor: "text-violet-600",
//     ringColor: "border-violet-500",
//   },
// ];

// /**
//  * FeatureCard Component
//  * Renders an individual, unique, and complex feature card in a light theme.
//  */
// const FeatureCard = ({ icon: Icon, title, description, iconColor, ringColor }) => (
//   // Complex card container with light mode base and subtle shadow
//   <div style={{
//     boxShadow:
//       "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
//   }} className={`
//     p-0.5 rounded-2xl relative overflow-hidden
//     // Light theme styling: subtle white background, initial shadow, slight border
//     bg-white shadow-lg border border-gray-100
//     transition-all duration-500 ease-out
//     transform hover:shadow-2xl hover:-translate-y-2
//     group
//     // Enforcing a fixed height for uniform card size
//     h-[360px] 
//     w-full 
//   `}>
//     <div className={`
//       bg-white p-8 rounded-[1.1rem] h-full
//       transition-all duration-300
//     `}>
//         {/* Icon Container with Complex Animation/Styling */}
//         <div className={`
//             w-16 h-16 flex items-center justify-center
//             rounded-2xl mb-6 relative
//             // Light theme icon container: light background, subtle gray border
//             bg-gray-100/70 border-2 border-gray-200
//         `}>
//             {/* Inner Icon Ring Effect */}
//             <div className={`
//                 absolute w-full h-full p-1 rounded-2xl
//                 transition-all duration-500
//                 opacity-0 group-hover:opacity-100
//                 group-hover:rotate-6
//             `}>
//                 {/* Dashed border uses the accent color */}
//                 <div className={`w-full h-full rounded-xl ${iconColor.replace('text', 'border')} border-dashed border opacity-50`}></div>
//             </div>
            
//             {/* The Icon */}
//             <Icon 
//                 size={30} 
//                 className={`${iconColor} transition duration-500 group-hover:scale-110 relative z-10`} 
//             />
//         </div>

//         <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-wide">
//         {title}
//         </h3>
//         <p className="text-gray-600 text-base leading-relaxed font-light">
//         {description}
//         </p>
//     </div>
//     {/* Animated Corner Glare (Subtle opacity for light theme) */}
//     <div className={`
//         absolute -top-10 -right-10 w-24 h-24 rounded-full 
//         ${iconColor.replace('text-', 'bg-')} opacity-5 
//         transition-all duration-500 transform scale-0 
//         group-hover:scale-100
//     `}></div>
//   </div>
// );


// /**
//  * Main App Component
//  * Renders the entire service feature section with a complex, unique, light design.
//  */
// const ServiceAsSoft = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      
//       {/* Background Gradient Blob 1 - Light and dynamic visual interest */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
//       {/* Background Gradient Blob 2 */}
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

//       <div className="max-w-[98%] mx-auto py-3 px-4 sm:px-6 lg:px-8 relative z-10">

//         {/* Header Section */}
//         <header className="text-center mb-20">
//           <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 sm:text-6xl lg:text-5xl uppercase tracking-tighter drop-shadow-sm">
//          Aim, Amplify & Achieve! Unlock Limitless Possibilities with AI
//           </h1>
//           <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-600 font-normal leading-relaxed">
// At Right Left AI, our mission is to make AI accessible to everyone. We believe in unleashing the power of artificial intelligence by combining human intuition with cutting-edge technology to solve complex challenges          </p>

//           {/* Custom styled file upload button (updated for light theme visibility) */}
//           {/* <div className="mt-10">
//             <label className="inline-flex items-center px-8 py-3 border-2 border-purple-600 text-purple-700 font-semibold rounded-full shadow-md hover:shadow-purple-300/50 hover:bg-purple-50 transition duration-300 cursor-pointer text-base">
//               <Layers size={18} className="mr-2" />
//               Upload Configuration
//               <input type="file" className="hidden" />
//             </label>
//             <span className="text-sm text-gray-500 block mt-2">No file chosen</span>
//           </div> */}
//         </header>

//         {/* Features Grid - Uniform and Animated */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={feature.title}
//               className={`animate-fade-in`}
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <FeatureCard {...feature} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Global Styles for Custom Animations (Blobs and Fade-in) */}
//       <style>{`
//         /* Custom Keyframes for fade-in effect */
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* Blob Keyframes for dynamic background */
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }

//         /* Applying the animations */
//         .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
//         .animate-blob { animation: blob 7s infinite alternate; }
//         .animation-delay-2000 { animation-delay: 2s; }
//         /* Complex Shadow definition for premium hover effect (adjusted for light background) */
//         .hover\\:shadow-2xl:hover { 
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 30px rgba(139, 92, 246, 0.2); 
//         }

//       `}</style>
//     </div>
//   );
// };

// export default ServiceAsSoft;



import React from 'react';
import { Target, Zap, TrendingUp, Layers, Aperture, BookOpen, Mic, Globe, FileText, BarChart2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Import necessary icons from 'lucide-react' (assuming you have them imported in the full component)
// import { Aperture, Mic, Globe, FileText, BarChart2, Shield } from 'lucide-react'; 

const productFeatures = [
    {
        icon: Globe,
        title: "CorpGPT & GovtGPT",
        tagline: "Secure Private AI for Institutional Knowledge.", 
        description: "A secure private AI system designed to connect institutional repositories, providing real-time responses in natural language along with deep operational insights. Your data, your intelligence, totally secure.",
        iconColor: "text-emerald-600",
        ringColor: "border-emerald-500",
        delay: 0.1,
    },
    {
        icon: Aperture,
        title: "RLAI Studio",
        tagline: "The Visual AI Content & Interaction Hub.", 
        description: "A comprehensive platform leveraging AI Avatars for unique Learning & Development experiences, 24/7 customer support/sales, and hyper-realistic marketing content generation.",
        iconColor: "text-orange-600",
        ringColor: "border-orange-500",
        subFeatures: [
            "AI Avatar L&D: 24/7 live courses with updated knowledge bases.",
            "Visual Bots: Live Avatar-based customer support, sales buddy, and lead generation.",
            "Media Generation: AI Avatar Marketing ADs, news videos, animated films, and music content.",
        ],
        delay: 0.2,
    },
    {
        icon: Mic,
        title: "RLAI Voice Platform",
        tagline: "Scalable Multilingual AI Voice Agents.", 
        description: "Multilingual, scalable AI Voice agent solution for Corporates and Government agencies, specializing in inbound and outbound Grievance handling, Feedback collection and comprehensive Customer support.",
        iconColor: "text-blue-600",
        ringColor: "border-blue-500",
        delay: 0.3,
    },
    {
        icon: FileText,
        title: "RLAI DocIntel",
        tagline: "Intelligent Document Processing & Insights.", 
        description: "Specialized solution for reading complex documents, including those consisting of images. Allows users to ingest their documents for automated summarization, image-to-text reading, topic generation, and deep insights.",
        iconColor: "text-red-600",
        ringColor: "border-red-500",
        delay: 0.4,
    },
    // --- NEW PRODUCT 1: Predictive Analytics ---
    {
        icon: BarChart2, // Assuming BarChart2 is available from lucide-react
        title: "RLAI Predict",
        tagline: "Advanced Predictive Modeling and Forecasting.", 
        description: "Leverage state-of-the-art machine learning models to predict market trends, customer churn, and financial risks. Provides actionable insights for strategic decision-making and resource optimization.",
        iconColor: "text-yellow-600",
        ringColor: "border-yellow-500",
        delay: 0.5,
    },
    // --- NEW PRODUCT 2: Security and Quantum Computing Ready ---
    {
        icon: Shield, // Assuming Shield is available from lucide-react
        title: "RLAI Quantum Secure",
        tagline: "Next-Generation Data Encryption & Anomaly Detection.", 
        description: "An advanced security platform utilizing quantum-resistant encryption principles and AI-driven behavioral analysis for real-time anomaly detection, protecting sensitive data from both current and future threats.",
        iconColor: "text-indigo-600",
        ringColor: "border-indigo-500",
        delay: 0.6,
    },
    {
        icon: Globe, 
        title: "AI City Solution (LOVAIC)",
        tagline: "Patented Computer Vision for Smart Cities.", 
        description: "Making nations better with our unique patented product LOVAIC (Low Vision AI Computation) computer vision solution, designed for comprehensive and efficient AI City management and monitoring.",
        iconColor: "text-violet-600",
        ringColor: "border-violet-500",
        delay: 0.7, // Updated delay to place it at the end
    },

    {
        icon: Zap, // Using Zap for energy/speed in experience
        title: "RLAI Experience",
        tagline: "Hyper-Personalization and Customer Journey Optimization.",
        description: "Utilizes advanced behavioral AI to map customer journeys, predict satisfaction scores, and deliver individualized service recommendations and dynamic pricing, maximizing retention and revenue.",
        iconColor: "text-pink-600",
        ringColor: "border-pink-500",
        delay: 0.6,
    },
];
// Framer Motion Variants
const cardContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardItemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.17, 0.67, 0.83, 0.67], // Custom cubic-bezier for a snappier feel
        },
    },
};


/**
 * FeatureCard Component 
 * Renders an individual, unique, and complex feature card.
 */
// 🔥 FIX APPLIED HERE: Added 'tagline' to the destructured props list
const FeatureCard = ({ icon: Icon, title, tagline, description, iconColor, ringColor, subFeatures }) => (
    <motion.div
        variants={cardItemVariants}
        className={`
            p-0.5 rounded-3xl relative overflow-hidden
            bg-white shadow-xl border border-gray-200
            transition-all duration-500 ease-out
            transform hover:shadow-2xl hover:scale-[1.02]
            group
            h-full
            min-h-[380px]
        `}
        style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
        }}
    >
        {/* Animated Accent Border */}
        <div className={`
            absolute inset-0 rounded-3xl p-0.5
            transition-all duration-500 opacity-0 group-hover:opacity-100
            ${ringColor.replace('border', 'border-4')} border-dashed
            pointer-events-none
        `}></div>

        <div className={`
            bg-white p-6 rounded-[1.8rem] h-full flex flex-col
            transition-all duration-300
        `}>
            {/* Icon Container with Complex Animation/Styling */}
            <div className={`
                w-16 h-16 flex items-center justify-center
                rounded-2xl mb-4 relative
                bg-gray-100/70 border-2 border-gray-200
                shadow-inner shadow-gray-300/50
            `}>
                {/* Dashed Ring Effect */}
                <div className={`
                    absolute w-full h-full p-1 rounded-2xl
                    transition-all duration-500
                    opacity-0 group-hover:opacity-100
                    group-hover:rotate-6
                `}>
                    <div className={`w-full h-full rounded-xl ${iconColor.replace('text', 'border')} border-dashed border opacity-50`}></div>
                </div>
                
                {/* The Icon */}
                <Icon 
                    size={32} 
                    className={`${iconColor} transition duration-500 group-hover:scale-110 relative z-10`} 
                />
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
                {title}
            </h3>
            {/* Tagline is now rendered correctly */}
            <p className="text-sm font-semibold mb-3 text-gray-500">{tagline}</p> 
            
            <p className="text-gray-700 text-base leading-relaxed font-light mb-4 flex-grow">
                {description}
            </p>

        
        </div>
        
        {/* Animated Corner Glare */}
        <div className={`
            absolute -top-10 -right-10 w-24 h-24 rounded-full 
            ${iconColor.replace('text-', 'bg-')} opacity-10 
            transition-all duration-500 transform scale-0 
            group-hover:scale-100
        `}></div>
    </motion.div>
);


/**
 * Main App Component 
 */
const ServiceAsSoft = () => {
    return (
        <div className="bg-gray-50 text-gray-900 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
            
            {/* Background Gradient Blob 1 - Uses Framer Motion for a smooth perpetual background animation */}
            <motion.div 
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            ></motion.div>
            
            {/* Background Gradient Blob 2 */}
            <motion.div
                 animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    rotate: [360, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            ></motion.div>


            <div className=" py-3 px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-4">
                        Our Unique Product Ecosystem
                    </h2>
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 sm:text-6xl tracking-tight drop-shadow-sm">
                        Aim, Amplify & Achieve!
                    </h1>
                    <p className="mt-4 max-w-4xl mx-auto text-xl text-gray-600 font-normal leading-relaxed">
                        At Right Left AI, our mission is to make AI accessible to everyone. We believe in unleashing the power of artificial intelligence by combining human intuition with cutting-edge technology to solve complex challenges.
                    </p>
                </header>

                {/* Features Grid - Framer Motion Applied (Scroll Triggered) */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {productFeatures.map((feature) => (
                        // FeatureCard is now receiving all its required props
                        <FeatureCard 
                            key={feature.title} 
                            {...feature} 
                            icon={feature.icon} 
                            subFeatures={feature.subFeatures} 
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceAsSoft;