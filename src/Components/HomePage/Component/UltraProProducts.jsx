import React from 'react';
import { motion } from 'framer-motion';

// --- Data Structure ---
// Duplicated and modified the original 3 items to create a set of 6 products.
const products = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-9.2 6.5C3.8 11 4.5 12 6 12h12c1.5 0 2.2-1 3.2-3.5A10 10 0 0 0 12 2Z"/><path d="M12 22a10 10 0 0 1-9.2-6.5C3.8 13 4.5 12 6 12h12c1.5 0 2.2 1 3.2 3.5A10 10 0 0 1 12 22Z"/></svg>
    ),
    title: 'IntelliVantage',
    description: 'AI-powered solutions that autonomously handle customer inquiries across Travel, Transport, Hospitality, and Telecom sectors, continuously learning and adapting.',
    metrics: [
      'Reduced response time by 72%',
      'Increased customer satisfaction by 93%',
      'Achieved 85% first-call resolution rate',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'IntelliReach',
    description: 'An AI marketing suite providing end-to-end campaign management for key industries with intelligent content generation and real-time analytics.',
    metrics: [
      'Improved campaign ROI by 130%',
      'Increased conversion rates by 47%',
      'Reduced marketing costs by 18%',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M10 9l4 4l-4 4"/></svg>
    ),
    title: 'IntelliWorkflow',
    description: 'Industry-specific autonomous workflow agents that collaborate with teams to optimize processes across Travel, Transport, and Logistics operations automatically.',
    metrics: [
      'Improved operational efficiency by 65%',
      'Reduced processing time by 88%',
      'Improved resource utilization by 23%',
    ],
  },
  // --- New set of 3 cards (4, 5, 6) ---
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
    ),
    title: 'IntelliOpsGrid',
    description: 'A dedicated platform for managing complex operational data streams, providing predictive analytics and real-time inventory adjustments across retail and manufacturing.',
    metrics: [
      'Reduced inventory errors by 45%',
      'Accelerated predictive modeling by 15%',
      'Achieved 99% data integrity score',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5"/><path d="M16 8l-4-4l-4 4"/><path d="M12 4v12"/></svg>
    ),
    title: 'IntelliSecureFlow',
    description: 'Automated threat detection and compliance assurance platform for financial services and healthcare, dramatically lowering security response times.',
    metrics: [
      'Lowered compliance risk by 58%',
      'Reduced security incident time by 34%',
      'Zero unauthorized data access incidents',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12c.5 4.5-2 8.5-4.5 9.5-3.5.5-5-.5-5.5-2.5-.5 2-2 3-5.5 2.5C4.5 20.5 2 16.5 2.5 12c.5-4.5 3-7 5.5-7 3.5-.5 5 .5 5.5 2.5.5-2 2-3 5.5-2.5 3 0 5.5 2.5 5.5 7Z"/></svg>
    ),
    title: 'IntelliSustain',
    description: 'A sustainability agent that monitors energy consumption and supply chain ethics, optimizing ecological footprint for major infrastructure projects.',
    metrics: [
      'Optimized energy usage by 39%',
      'Improved carbon tracking accuracy by 98%',
      'Achieved B-Corp certification readiness',
    ],
  },
];

// --- Framer Motion Variants ---

// Parent variant for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly reduced stagger for 6 items
    },
  },
};

// Child variant (used for each individual card)
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.55, 0.55, 1], // Custom easing for a smooth, professional feel
    },
  },
};


// --- Reusable Animated Card Component ---
const AnimatedProductCard = ({ icon, title, description, metrics, isAccent }) => {
    // Define conditional classes for the accent theme (Theme 2: Light/Accent)
    const bgClass = isAccent 
        ? 'bg-indigo-50/70 shadow-lg border-indigo-200' // Light accent background with a subtle border
        : 'bg-white shadow-xl border-gray-100';       // Crisp white background with stronger shadow

    const hoverClass = isAccent 
        ? 'shadow-indigo-300/60' // Shadow glow on light card
        : 'shadow-2xl shadow-indigo-400/50'; // Deeper shadow on white card

    // Use two different primary colors for better visual separation
    const primaryColor = isAccent ? 'text-purple-600' : 'text-indigo-600';
    const primaryBg = isAccent ? 'bg-purple-500/10' : 'bg-indigo-500/10';

  return (
    <motion.div
      variants={cardVariants}
      className={`
        p-8 
        rounded-2xl 
        border-t-4 border-b-2
        flex flex-col 
        h-full
        transition-all duration-300
        scale-[1.03]
        relative
        overflow-hidden
        ${bgClass}
        ${hoverClass}
      `}
    >
      {/* Dynamic Accent Bar (Uses the same gradient for consistency) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

      {/* Icon Section */}
      <div className="mb-4">
        <div className={`p-3 rounded-full w-fit ${primaryBg} ${primaryColor} shadow-inner`}>
          {icon}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>

      {/* Key Metrics Section */}
      <div className="pt-4 border-t border-gray-100 mt-auto">
        <h4 className={`text-sm font-semibold uppercase ${primaryColor} mb-3`}>Key Metrics</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {metrics.map((metric, i) => (
            <li key={i} className="flex items-start">
              <svg className={`w-5 h-5 ${primaryColor} mr-2 flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {metric}
            </li>
          ))}
        </ul>
      </div>

    </motion.div>
  );
};


// --- Main Component ---
const UltraProProducts = () => {
  return (
    <div className=" bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90%] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="uppercase text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Agentic Products</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Discover how our suite of autonomous AI agents collaborate with your teams to solve complex industry challenges.
          </p>

        </div>

        {/* Animated Product Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10" // 3 columns on medium screens and above
          variants={containerVariants}
          initial="hidden"
          whileInView="show" // Trigger animation when container comes into view
          viewport={{ once: true, amount: 0.2 }} // Play animation once when 20% visible
        >
          {products.map((product, index) => (
            // Pass the isAccent prop to alternate the theme: White (index 0, 2, 4) vs Light (index 1, 3, 5)
            <AnimatedProductCard 
              key={index} 
              {...product} 
              isAccent={index % 2 !== 0} 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UltraProProducts;
