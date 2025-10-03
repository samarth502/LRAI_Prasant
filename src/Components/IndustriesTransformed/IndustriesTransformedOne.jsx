import React, { useState } from 'react';

// Card data with unique colors for visual distinction (similar to placeholder images)
const industryData = [
  { 
    title: "Financial Modeling", 
    description: "Autonomous agents manage complex financial forecasts and risk analysis.",
    color: "bg-indigo-700",
    hoverColor: "hover:bg-indigo-600"
  },
  { 
    title: "Global Supply Chain", 
    description: "Optimizing logistics routes and inventory in real-time for maximum efficiency.",
    color: "bg-emerald-700",
    hoverColor: "hover:bg-emerald-600"
  },
  { 
    title: "Patient Diagnostics", 
    description: "Accelerating the analysis of complex medical data for faster, better outcomes.",
    color: "bg-red-700",
    hoverColor: "hover:bg-red-600"
  },
  { 
    title: "Retail Personalization", 
    description: "Creating hyper-personalized shopping experiences and dynamic pricing strategies.",
    color: "bg-yellow-600", // Addressing the "yellow" request
    hoverColor: "hover:bg-yellow-500"
  },
  { 
    title: "Energy Grid Management", 
    description: "Predictive maintenance and load balancing for sustainable energy distribution.",
    color: "bg-sky-700",
    hoverColor: "hover:bg-sky-600"
  },
  { 
    title: "Manufacturing Robotics", 
    description: "Programming and managing robotic fleets with zero-touch automation.",
    color: "bg-purple-700",
    hoverColor: "hover:bg-purple-600"
  },
];

// Reusable Card Component
const IndustryCard = ({ title, description, color, hoverColor }) => {
  return (
    <div 
      className={`relative h-64 overflow-hidden rounded-2xl shadow-xl 
                  ${color} ${hoverColor} transition-all duration-300 ease-in-out 
                  transform hover:scale-[1.02] cursor-pointer group`}
    >
      {/* Background Effect: Subtle noise/texture for premium feel */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '20px 20px' }}
      ></div>

      {/* Content Container */}
      <div className="relative p-6 h-full flex flex-col justify-end">
        
        {/* Title */}
        <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">
          {title}
        </h3>
        
        {/* Description - Hidden until hover, revealed with a subtle transition */}
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 pt-1 border-t border-white/20">
          {description}
        </p>

        {/* Floating Arrow Icon for visual appeal (using SVG for portability) */}
        <svg 
          className="absolute top-6 right-6 w-8 h-8 text-white opacity-50 group-hover:opacity-100 
                     group-hover:translate-x-1 transition-all duration-300" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 7l10 10M17 7L7 17"></path>
        </svg>
      </div>
    </div>
  );
};

// Main Application Component
const IndustriesTransformedOne = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-8 lg:p-12">
      
      {/* Header Section */}
      <header className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Agentic AI: Strategic Domain Transformations
        </h1>
        <p className="text-xl text-gray-400">
          Our specialized autonomous agents deploy deep learning and industry knowledge to deliver
          measurable, high-impact business outcomes across complex sectors.
        </p>
        <div className="w-24 h-1 mx-auto mt-4 bg-purple-500 rounded-full"></div>
      </header>

      {/* Cards Grid Container */}
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid Layout: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryData.map((industry, index) => (
            <IndustryCard 
              key={index}
              title={industry.title}
              description={industry.description}
              color={industry.color}
              hoverColor={industry.hoverColor}
            />
          ))}
        </div>
      </div>

      {/* Footer / Call to Action */}
      <div className="text-center mt-16">
          <button className="px-8 py-3 text-lg font-semibold rounded-full 
                             bg-gradient-to-r from-purple-600 to-blue-500 
                             hover:from-purple-500 hover:to-blue-400 
                             transition-all duration-300 shadow-lg shadow-purple-500/50">
            Explore All Solutions
          </button>
      </div>

    </div>
  );
};

export default IndustriesTransformedOne
