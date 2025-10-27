import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; // Modern hook for scroll detection

// Data for the metrics
const resultsData = [
  { end: 85, suffix: '%', label: 'Average Efficiency Increase', color: 'text-teal-500' },
  { end: 120, suffix: '%', label: 'ROI Improvement', color: 'text-orange-500' },
  { end: 70, suffix: '%', label: 'Cost Reduction', color: 'text-blue-500' },
  { end: 95, suffix: '%', label: 'Customer Satisfaction', color: 'text-purple-500' },
];

/**
 * Component to display a single animated metric item.
 * Uses useInView to trigger animation upon scrolling into view.
 */
const AnimatedMetricItem = ({ end, suffix, color, label }) => {
  // Setup the Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation runs only the first time it enters the viewport
    threshold: 0.2,    // 20% of the item must be visible to trigger
  });

  return (
    <div
      ref={ref} // Attach the ref to the element we want to observe
      className="flex flex-col items-center p-6 transition duration-500 ease-in-out transform scale-105 shadow-2xl rounded-xl bg-white bg-opacity-90 shadow-lg border border-gray-100"
    >
      <p className={`text-7xl font-black ${color} mb-3`}>
        {/* CountUp component handles the smooth "running" number animation */}
        <CountUp
          start={0}
          // The animation ends at 'end' if visible, or stays at 0 if not visible yet
          end={inView ? end : 0} 
          duration={2.5} // Animation time
          suffix={suffix}
        />
      </p>
      
      {/* Label */}
      <p className="text-xl font-semibold text-gray-700 mt-2">
        {label}
      </p>
    </div>
  );
};


const AnimatedResults = () => {
  return (
    <div className="py-10 px-6  bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="max-w-[90%] mx-auto text-center">
        {/* Title and Subtitle Section */}
        <h2 className=" uppercase text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Proven Results Across Industries
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
Aim, Amplify & Achieve! Unlock Limitless Possibilities with AI        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {resultsData.map((result, index) => (
            <AnimatedMetricItem 
              key={index} 
              {...result} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedResults;