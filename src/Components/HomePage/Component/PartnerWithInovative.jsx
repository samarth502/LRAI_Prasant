import React, { useState } from 'react';
import { CheckCircle, Zap, Shield, TrendingUp, DollarSign, Briefcase } from 'lucide-react';

// --- Data Structure for Tabs ---
const tabContent = [
  {
    id: 'proven_record',
    label: 'Proven Record with MSMEs',
    icon: Briefcase,
    color: 'indigo',
    details: [
      "2000+ Projects Delivered",
      "Fortune 500 Experience",
      "Certified AI & Cloud Teams",
      "Award-Winning Engineering",
    ],
    title: 'Proven Record with MSMEs',
    visualAlt: 'A businessman drawing an upward trending chart, symbolizing success and growth.',
    visualUrl: 'https://www.innovationm.com/assets/images/home/why_us_tabs/3.webp',
  },
  {
    id: 'innovation_growth',
    label: 'Innovation That Drives Growth',
    icon: Zap,
    color: 'indigo',
    details: [
      "Agile Product Iteration",
      "Future-Ready Tech Stacks",
      "Dedicated R&D Labs",
      "Scalable Solutions Design",
    ],
    title: 'Innovation That Drives Growth',
    visualAlt: 'Abstract image representing innovation and speed.',
    visualUrl: 'https://www.innovationm.com/assets/images/home/why_us_tabs/1.webp',
  },
  {
    id: 'results_value',
    label: 'Results That Deliver Value',
    icon: DollarSign,
    color: 'indigo',
    details: [
      "Measurable ROI Focus",
      "Optimized Operational Costs",
      "Enhanced User Retention",
      "IP Protection Guaranteed",
    ],
    title: 'Results That Deliver Value',
    visualAlt: 'Image showing monetary value and high returns.',
    visualUrl: 'https://www.innovationm.com/assets/images/home/why_us_tabs/2.webp',
  },
];

// --- Tab Component ---
const TabButton = ({ isActive, label, onClick, color }) => {
  const baseClasses = "flex-1 text-center py-3 px-2 transition-all duration-300 rounded-lg cursor-pointer font-semibold text-lg md:text-xl whitespace-nowrap";
  
  const activeClasses = `bg-${color}-500 text-white shadow-lg shadow-${color}-500/50`;
  const inactiveClasses = `bg-gray-100 text-gray-700 hover:bg-${color}-100 hover:text-${color}-700`;

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};



// --- Main App Component ---
const PartnerWithInovative = () => {
  const [activeTab, setActiveTab] = useState(tabContent[0].id);

  const activeData = tabContent.find(tab => tab.id === activeTab);

  return (
    <div className=" bg-gray-50 font-sans  antialiased">
      <div className="px-5 py-2 lg:py-2">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <p className="text-lg font-semibold text-indigo-600 uppercase tracking-widest mb-2">
            Why Partner with InnovationM?
          </p>
          <h1 className="uppercase text-5xl font-semibold text-gray-900 tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600
">
            Engineering Digital Success with Innovation & Expertise
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partnering with InnovationM gives you a dedicated technology partner delivering from UI/UX design and custom software development to AI powered solutions and digital transformation tailored to your business needs, ensuring measurable value and sustainable growth.
          </p>
        </header>

        {/* Tab Navigation (Pills) */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-12 p-3 bg-white rounded-xl shadow-xl">
          {tabContent.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              color={tab.color}
            />
          ))}
        </div>

        {/* Tab Content Area */}
        {activeData && (
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border-t-4 border-emerald-500 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <activeData.icon className={`w-8 h-8 mr-3 text-${activeData.color}-600`} />
                    {activeData.title}
                </h2>
                
                <ul className="space-y-4">
                  {activeData.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckCircle className={`w-5 h-5 mt-1 mr-3 text-${activeData.color}-500 flex-shrink-0`} />
                      <span className="text-lg font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Visual */}
              <div className="order-1 lg:order-2">
                <img
                  src={activeData.visualUrl}
                  alt={activeData.visualAlt}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerWithInovative;
