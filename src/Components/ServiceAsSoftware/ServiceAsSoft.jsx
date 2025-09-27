import React from 'react';
import { Target, Zap, TrendingUp, Layers } from 'lucide-react';

// Data for the four feature cards (updated for light theme)
const features = [
  {
    icon: Target,
    title: "Outcome-Focused Metrics",
    description: "Every AI Agent is designed to drive specific, measurable business outcomes with clear KPIs and performance indicators.",
    iconColor: "text-emerald-600",
    ringColor: "border-emerald-500",
  },
  {
    icon: Zap,
    title: "Service As a Software",
    description: "Our Agentic AI operates as intelligent services that continuously learn, adapt, and optimize your business processes autonomously.",
    iconColor: "text-orange-600",
    ringColor: "border-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Performance Tracking",
    description: "Monitor ROI, efficiency gains, and operational improvements in real-time across all your AI-powered workflows.",
    iconColor: "text-blue-600",
    ringColor: "border-blue-500",
  },
  {
    icon: Layers,
    title: "Industry-Specific Optimization",
    description: "Tailored metrics and outcomes specifically designed for Travel, Transport, Hospitality, Logistics, and Telecom sectors.",
    iconColor: "text-violet-600",
    ringColor: "border-violet-500",
  },
];

/**
 * FeatureCard Component
 * Renders an individual, unique, and complex feature card in a light theme.
 */
const FeatureCard = ({ icon: Icon, title, description, iconColor, ringColor }) => (
  // Complex card container with light mode base and subtle shadow
  <div style={{
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
  }} className={`
    p-0.5 rounded-2xl relative overflow-hidden
    // Light theme styling: subtle white background, initial shadow, slight border
    bg-white shadow-lg border border-gray-100
    transition-all duration-500 ease-out
    transform hover:shadow-2xl hover:-translate-y-2
    group
    // Enforcing a fixed height for uniform card size
    h-[360px] 
    w-full 
  `}>
    <div className={`
      bg-white p-8 rounded-[1.1rem] h-full
      transition-all duration-300
    `}>
        {/* Icon Container with Complex Animation/Styling */}
        <div className={`
            w-16 h-16 flex items-center justify-center
            rounded-2xl mb-6 relative
            // Light theme icon container: light background, subtle gray border
            bg-gray-100/70 border-2 border-gray-200
        `}>
            {/* Inner Icon Ring Effect */}
            <div className={`
                absolute w-full h-full p-1 rounded-2xl
                transition-all duration-500
                opacity-0 group-hover:opacity-100
                group-hover:rotate-6
            `}>
                {/* Dashed border uses the accent color */}
                <div className={`w-full h-full rounded-xl ${iconColor.replace('text', 'border')} border-dashed border opacity-50`}></div>
            </div>
            
            {/* The Icon */}
            <Icon 
                size={30} 
                className={`${iconColor} transition duration-500 group-hover:scale-110 relative z-10`} 
            />
        </div>

        <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-wide">
        {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed font-light">
        {description}
        </p>
    </div>
    {/* Animated Corner Glare (Subtle opacity for light theme) */}
    <div className={`
        absolute -top-10 -right-10 w-24 h-24 rounded-full 
        ${iconColor.replace('text-', 'bg-')} opacity-5 
        transition-all duration-500 transform scale-0 
        group-hover:scale-100
    `}></div>
  </div>
);


/**
 * Main App Component
 * Renders the entire service feature section with a complex, unique, light design.
 */
const ServiceAsSoft = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      
      {/* Background Gradient Blob 1 - Light and dynamic visual interest */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      {/* Background Gradient Blob 2 */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-[98%] mx-auto py-3 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 sm:text-6xl lg:text-7xl tracking-tighter drop-shadow-sm">
            Service As a Software
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-600 font-normal leading-relaxed">
            AlonOs delivers **AI Agents** as intelligent, autonomous services that focus on driving measurable business outcomes across global sectors like Travel, Transport, Hospitality, Logistics, and Telecom. Our platform is built for continuous, real-time optimization.
          </p>

          {/* Custom styled file upload button (updated for light theme visibility) */}
          {/* <div className="mt-10">
            <label className="inline-flex items-center px-8 py-3 border-2 border-purple-600 text-purple-700 font-semibold rounded-full shadow-md hover:shadow-purple-300/50 hover:bg-purple-50 transition duration-300 cursor-pointer text-base">
              <Layers size={18} className="mr-2" />
              Upload Configuration
              <input type="file" className="hidden" />
            </label>
            <span className="text-sm text-gray-500 block mt-2">No file chosen</span>
          </div> */}
        </header>

        {/* Features Grid - Uniform and Animated */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      {/* Global Styles for Custom Animations (Blobs and Fade-in) */}
      <style>{`
        /* Custom Keyframes for fade-in effect */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Blob Keyframes for dynamic background */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        /* Applying the animations */
        .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
        .animate-blob { animation: blob 7s infinite alternate; }
        .animation-delay-2000 { animation-delay: 2s; }
        /* Complex Shadow definition for premium hover effect (adjusted for light background) */
        .hover\\:shadow-2xl:hover { 
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 30px rgba(139, 92, 246, 0.2); 
        }

      `}</style>
    </div>
  );
};

export default ServiceAsSoft;
