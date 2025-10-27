

// import React from 'react';

// const Hero = () => {
//   return (


//     <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-4 overflow-hidden font-sans">
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/5263914_Robot_Future_3840x2160.mp4" type="video/mp4" />
//         {/* Your browser does not support the video tag. */}
//       </video>

//     </div>

    
//   );
// };

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Static data for visual elements
  const dataPoints = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    value: Math.random(),
  }));

  const mockLogs = [
    "[INFO] Initializing RLAI Neural Engine v3.1...",
    "[DEBUG] Data stream input: sensor_fusion_01.dat",
    "[INFO] Model 'CognitoNet' loaded successfully. Latency: 4ms",
    "[WARNING] High confidence anomaly detected in quadrant B-7. Review required.",
    "[SUCCESS] Prediction generated. Accuracy: 98.7% (target: 98.5%)",
    "[INFO] Committing results to distributed ledger 'RLAI_DChain_v1.0'.",
    "[DEBUG] System heartbeat: OK. Next cycle in 1000ms.",
    "[INFO] System analysis complete.",
    "[DEBUG] Processing unit idle. Awaiting next command.",
    "[SUCCESS] All systems operational.",
    "[INFO] Initializing RLAI Neural Engine v3.1...",
    "[DEBUG] Data stream input: sensor_fusion_01.dat",
  ];

  // Framer Motion Variants for Staggered Entrance
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15, // Slightly faster stagger
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  return (
    <div className="relative mb-10 flex flex-col items-center justify-center text-center text-white p-4 overflow-hidden font-sans bg-gray-950">
      {/* 1. Background Video (Dark, for high-contrast transparency) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" 
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/5263914_Robot_Future_3840x2160.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      {/* 2. Main Content Container - Positioned to keep content on the far left and center vertically */}
      <div className="relative z-10 w-full h-full flex justify-start items-center px-4"> 
        
        {/* === RLAI Advanced AI Interface (50vh Height, Transparent Panel) === */}
        <motion.div 
          // Framer Motion applied to the main container
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          
          // CRUCIAL CHANGE: Fixed height to 50vh, and made it flexible to manage internal space
          className="w-full max-w-lg h-[80vh] bg-black/50 border border-teal-500/50 p-8 flex flex-col justify-start space-y-4 rounded-3xl shadow-deep-glow-teal relative overflow-hidden"
        >
          
          {/* Decorative Grid Overlay (CSS animation) */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {/* Lines and animation must be defined in tailwind.config.js */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-[1px] bg-teal-500/20 animate-grid-line"
                style={{ top: `${(i * 5) % 100}%`, animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i + 20}
                className="absolute h-full w-[1px] bg-teal-500/20 animate-grid-line"
                style={{ left: `${(i * 5) % 100}%`, animationDelay: `${i * 0.2 + 0.5}s` }}
              ></div>
            ))}
          </div>

          {/* RLAI Title & Tagline */}
          <motion.div variants={itemVariants} className="relative z-10 text-left">
            <h1 className="text-5xl font-extrabold text-teal-400 tracking-tighter uppercase leading-tight">
              RLAI
            </h1>
            <p className="text-lg font-light uppercase text-gray-300 mt-2 tracking-wide border-b border-teal-500/40 pb-3">
              Pioneering Intelligent Solutions for a Smarter Future
            </p>
          </motion.div>

          {/* Real-time AI Processing (Bar Chart) */}
          <motion.div variants={itemVariants} className="relative z-10 bg-black/60 p-4 rounded-xl border border-teal-600/40 shadow-inner-glow flex flex-col items-center">
            <h3 className="text-lg font-semibold text-teal-300 mb-3 tracking-wider">
              Real-time AI Processing
            </h3>
            <div className="w-full h-20 flex items-end justify-between px-2">
              {dataPoints.map((dp) => (
                <div
                  key={dp.id}
                  className="w-2 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-sm animate-pulse-bar"
                  style={{ height: `${dp.value * 90 + 10}%` }} 
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <span className="text-teal-400 animate-pulse-fast">●</span> Data Ingested: <span className="text-white font-medium">1.2 TB/hr</span> | Latency: <span className="text-white font-medium">~3ms</span>
            </p>
          </motion.div>

          {/* System Console Output (Logs) - Uses flex-grow to fill remaining space */}
          <motion.div variants={itemVariants} className="relative z-10 bg-black/70 p-4 rounded-xl border border-gray-700/50 shadow-console-glow flex-grow overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-200 mb-2 tracking-wider border-b border-gray-700 pb-2">
              System Console Output
            </h3>
            {/* The scrollable area now fills the available space within the flex container */}
            <div className="h-full overflow-y-scroll text-left text-sm font-mono text-gray-400 leading-relaxed scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-transparent pr-2">
              {mockLogs.map((log, index) => (
                <p key={index} style={{ opacity: 1 }} className="py-[1px]">
                  {log.includes("[INFO]") && <span className="text-cyan-400">[INFO]</span>}
                  {log.includes("[DEBUG]") && <span className="text-purple-400">[DEBUG]</span>}
                  {log.includes("[WARNING]") && <span className="text-yellow-400">[WARNING]</span>}
                  {log.includes("[SUCCESS]") && <span className="text-green-400">[SUCCESS]</span>}
                  {log.split(/\[INFO\]|\[DEBUG\]|\[WARNING\]|\[SUCCESS\]/)[1]}
                </p>
              ))}
              <p className="mt-2 text-teal-400 animate-pulse-caret">RLAI_shell&gt; _</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="relative z-10 text-center pt-2">
            <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 text-md font-bold uppercase rounded-full tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl shadow-teal-500/50 transform hover:-translate-y-0.5">
              Explore Our Core Systems
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;