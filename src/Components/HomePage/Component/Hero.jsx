import React, { useState, useEffect } from 'react';

    // --- CUSTOM STYLING FOR ULTRA-PREMIUM AESTHETICS ---
    // We define custom CSS keyframes here to achieve smooth animations and the 
    // specific deep glow effect that matches your RLAI logo's color scheme (Violet/Indigo).
    const customStyles = `
    /* Keyframes for Staggered Entrance */
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Deep Violet Glow Effect (Matching Logo Outer Ring) */
    @keyframes deep-glow-violet {
        0% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.4); } /* Violet-500, subtle start */
        50% { box-shadow: 0 0 18px rgba(139, 92, 246, 0.9), 0 0 40px rgba(109, 40, 217, 0.6); } /* Peak glow */
        100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.4); } /* Return to subtle */
    }

    /* Pulse for Bar Chart */
    @keyframes pulse-bar {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(1.3); } /* Slightly more dramatic pulse */
    }
    
    /* Scanning Line Animation for Background Grid */
    @keyframes scan-line {
        0% { opacity: 0; transform: translateY(-50%); }
        50% { opacity: 0.5; }
        100% { opacity: 0; transform: translateY(105%); }
    }
    
    /* Custom Scrollbar for console output */
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #8B5CF6; /* Violet-500 */
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
    }

    /* CSS Class Application */
    .animate-entrance {
        animation: fade-in 0.8s ease-out both;
        opacity: 0; 
    }

    .shadow-deep-glow-violet {
        animation: deep-glow-violet 4s infinite ease-in-out;
    }

    .animate-pulse-bar {
        animation: pulse-bar 1.5s infinite alternate;
    }
    
    .holographic-grid-line {
        position: absolute;
        background-color: rgba(139, 92, 246, 0.15); /* Violet-500 with low opacity */
        animation: scan-line 8s linear infinite;
    }
    `;

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


    // The component function is now named Hero
    const Hero = () => {
        // State to handle the single mounting animation transition
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
            // Trigger the main container's opacity transition after a short delay
            const timer = setTimeout(() => setIsMounted(true), 100);
            return () => clearTimeout(timer);
        }, []);

        // Function to generate the CSS animation delay for staggered entrance
        const getDelay = (index) => ({ animationDelay: `${index * 0.15 + (isMounted ? 0.3 : 0)}s` });
        
        // Determine the log text color based on the log type (using Indigo/Violet accents)
        const getLogStyle = (log) => {
            if (log.includes("[INFO]")) return "text-indigo-300";
            if (log.includes("[DEBUG]")) return "text-fuchsia-400";
            if (log.includes("[WARNING]")) return "text-amber-400";
            if (log.includes("[SUCCESS]")) return "text-emerald-400";
            return "text-gray-400";
        };

        return (
            // Removed bg-gray-950 here to let the video color dominate
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-4 overflow-hidden font-sans">
                {/* Inject Custom Styles */}
                <style>{customStyles}</style>

                {/* 1. Background Video (Video source and placeholder updated as requested) */}
                <video
                    // Increased video opacity to 80% for deeper color saturation
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    {/* Updated to user's specified local video source */}
                    <source src="0_Robot_Ai_3840x2160 (1).mov" type="video/mp4" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/000000/1e0a3b?text=AI+Background"; }}/>
                    Your browser does not support the video tag.
                </video>

                {/* 2. Main Content Container - Pushed to the right for a dashboard feel */}
                <div className="relative z-10 w-full h-full flex justify-center md:justify-end items-center px-4 md:px-8 py-8" style={{marginTop:"-90px"}}>
                    {/* === RLAI Advanced AI Interface Panel === */}
                    <div
                        // Set main panel to bg-black/70 (less opaque than /90) for transparency
                        className={`w-full max-w-lg h-[90vh] md:h-[80vh] bg-black/70 border border-violet-700/80 p-6 sm:p-8 flex flex-col justify-start space-y-5 rounded-3xl shadow-deep-glow-violet relative overflow-hidden transition-opacity duration-1000 `}
                        style={{ opacity: isMounted ? 1 : 0 }}
                    >
                        
                        {/* Decorative Grid Overlay (Subtle Violet Scan) */}
                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
                            {/* Horizontal scan lines, animated with the custom keyframes */}
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div
                                    key={`h-${i}`}
                                    className="holographic-grid-line w-full h-[2px]"
                                    style={{ top: `${i * 10}%`, animationDelay: `${i * 0.4}s` }}
                                ></div>
                            ))}
                        </div>

                        {/* RLAI Title & Tagline (Violet Text, Staggered entrance 0) */}
                        <div className="relative z-10 text-left animate-entrance" style={getDelay(0)}>
                            <h1 className="text-6xl text-white font-extrabold text-violet-400 tracking-tighter uppercase leading-tight drop-shadow-lg">
                                RLAI
                            </h1>
                            <p className="text-lg text-white font-light uppercase text-gray-300 mt-2 tracking-wide border-b border-indigo-500/50 pb-3">
                                Right Left AI - Aim, Amplify & Achieve!
                            </p>
                        </div>

                        {/* Real-time AI Processing (Bar Chart) (Staggered entrance 1) */}
                        <div 
                            // Set inner component to bg-black/50 for higher transparency
                            className="relative z-10 bg-black/50 p-4 rounded-xl border border-violet-600/80 shadow-2xl flex flex-col items-center animate-entrance" 
                            style={getDelay(1)}
                        >
                            <h3 className="text-lg text-white font-semibold text-violet-300 mb-3 tracking-wider">
                                Real-time Deep Learning Metrics
                            </h3>
                            <div className="w-full h-20 flex items-end justify-between px-2">
                                {dataPoints.map((dp) => (
                                    <div
                                        key={dp.id}
                                        className="w-2 md:w-3 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-sm animate-pulse-bar"
                                        style={{ height: `${dp.value * 90 + 10}%` }}
                                    ></div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-3">
                                <span className="text-violet-400 animate-pulse-fast">●</span> Compute Load: <span className="text-white font-medium">92%</span> | Model Latency: <span className="text-white font-medium">1.8ms</span>
                            </p>
                        </div>

                        {/* System Console Output (Logs) - Fills remaining space (Staggered entrance 2) */}
                        <div 
                            // Set inner component to bg-black/50 for higher transparency
                            className="relative z-10 bg-black/50 p-4 rounded-xl border border-gray-700/50 shadow-inner flex-grow overflow-hidden animate-entrance" 
                            style={getDelay(2)}
                        >
                            <h3 className="text-lg font-semibold text-gray-200 mb-2 tracking-wider border-b border-gray-700 pb-2">
                                System Console Output
                            </h3>
                            {/* Apply custom scrollbar for sleek console look */}
                            <div className="h-full overflow-y-scroll text-left text-xs sm:text-sm font-mono text-gray-400 leading-relaxed custom-scrollbar pr-2">
                                {mockLogs.map((log, index) => (
                                    <p key={index} className="py-[1px]">
                                        <span className={getLogStyle(log)}>
                                            {/* Highlight the log type in color */}
                                            {log.substring(0, log.indexOf(']'))}]
                                        </span>
                                        {log.substring(log.indexOf(']') + 1)}
                                    </p>
                                ))}
                                <p className="mt-2 text-violet-400 animate-pulse-caret">RLAI_shell&gt; _</p>
                            </div>
                        </div>

                        {/* Call to Action (Staggered entrance 3) */}
                        <div className="relative z-10 text-center pt-2 animate-entrance" style={getDelay(3)}>
                            <a href='#services' onClick={() => console.log('Navigating to RLAI Services...')} className="block">
                                <button 
                                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-lg font-bold uppercase rounded-xl tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl shadow-violet-500/50 transform hover:scale-[1.02] border border-violet-400"
                                >
                                    Explore Our AI Solutions
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Export the Hero component as the default export for the App.jsx file
    export default Hero;