import React, { useState } from 'react';

// --- Icon Components (Heroicons) ---
// Using inline SVGs for a single-file, dependency-free component.

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.182 0-6.135-.58-8.687-1.745M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.182 0-6.135-.58-8.687-1.745M15 11a3 3 0 11-6 0 3 3 0 016 0zM15 11V7a3 3 0 00-3-3H9a3 3 0 00-3 3v4m6 0v4m-6 0v-4" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l7.586-7.586z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657l.007.007M15 12l6 6" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 015.136-1.414l.848.565.848-.565a4.5 4.5 0 115.136 1.414l-5.657 5.657a.5.5 0 01-.707 0L4.318 6.318z" />
  </svg>
);

const ChartBarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const UserCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 10l-4 4-2-2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// --- NEW Icon Components ---
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1H9z" />
  </svg>
);

const ClipboardCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-2 2-2-2" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);


// --- Reusable Pill Button (Updated) ---
const PillButton = ({ icon, text, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 py-2 px-4 rounded-full shadow-sm text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:shadow-md'
    }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

// --- Reusable Stat Item ---
const StatItem = ({ icon, title, description, iconBgClass }) => (
  <div className="flex items-start gap-4 transition-transform duration-200 hover:scale-[1.02]">
    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg shadow-md ${iconBgClass}`}>
      {icon}
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

// --- Stylized World Map (Inline SVG) ---
// This is a simplified world map SVG.
// Highlighted paths have `className="fill-blue-500"`.
// Other paths have `className="fill-gray-200"`.
const WorldMap = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <svg 
      className="w-full h-auto max-h-[400px]" 
      viewBox="0 0 1000 500" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="A stylized world map"
    >
      <g className="transition-colors duration-300">
        {/* North America */}
        <path d="M222 21l-98 123-28 35-13 47 4 4 19 8 10 16 11-3 11 11 25 21 7 13 19 8 36-22 11-15 15-7 22-19 12-19-14-11-15-20-10-18 6-11-20-30-24-11-20 6-22-12-14-36-5-18-12-12-11 5-13 7-19 3-10-3-11-10-12-14-16-15-10-11-20-11-18-13-13-11-13-8-2-11 2-10 11-12 17-10 9-11 15-11 10-14 8-10-6-13-11-11-18-11-13-11-16-16-10-20-17-11-16-11-11-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-16-1Failure-to-obfuscate" className="fill-blue-500 hover:fill-blue-700" />
        
        {/* South America */}
        <path d="M300 250l-10 30-10 20-5 30 10 20 10 10 20 10 10-5 5-10 10-20 5-30-10-20-10-10-20-10z" className="fill-blue-500 hover:fill-blue-700" />
        <path d="M280 280l-5 20 5 15 10 10 15 5 10-5 5-10-5-15-10-10-15-5z" className="fill-gray-200 hover:fill-gray-300" />

        {/* Africa */}
        <path d="M450 200l-20 30-10 40 5 30 20 20 30 10 20-10 10-20-5-30-10-40-20-30z" className="fill-gray-200 hover:fill-gray-300" />
        <path d="M440 220l-10 30 10 30 20 10 10-10-10-30-10-30-10-10z" className="fill-gray-200 hover:fill-gray-300" />

        {/* Europe */}
        <path d="M480 150l-10 20-5 15 10 10 20 5 10-5-5-15-10-20-10-10z" className="fill-gray-200 hover:fill-gray-300" />
        <path d="M500 130l-5 10 5 10 10 5 5-5-5-10-5-10-5-5z" className="fill-blue-500 hover:fill-blue-700" />

        {/* Asia */}
        <path d="M550 100l-30 40 10 50 40 30 50-10 30-40-10-50-40-30-50 10z" className="fill-gray-200 hover:fill-gray-300" />
        <path d="M600 120l20 30 10 20 30 10 20-10-10-20-20-30-30-10z" className="fill-gray-200 hover:fill-gray-300" />
        <path d="M700 200l10 20 5 10 15 5 10-5-5-10-10-20-10-5z" className="fill-blue-500 hover:fill-blue-700" />

        {/* Australia */}
        <path d="M750 350l-20 20 10 30 30 10 20-10-10-30-20-20z" className="fill-blue-500 hover:fill-blue-700" />
        <path d="M800 370l5 10 10 5 10-5-5-10-10-5z" className="fill-gray-200 hover:fill-gray-300" />
      </g>
    </svg>
  </div>
);


// --- Data for Tabs ---
const allStatsData = {
  financial: [
    {
      icon: <ChartBarIcon />,
      iconBgClass: 'bg-blue-100',
      title: '5.2M+',
      description: 'Financial conversations handled across loans, credit, and investments.',
    },
    {
      icon: <PhoneIcon />,
      iconBgClass: 'bg-green-100',
      title: '8x',
      description: 'More productive than traditional outbound call teams.',
    },
    {
      icon: <UserCheckIcon />,
      iconBgClass: 'bg-orange-100',
      title: '83%',
      description: 'Of account-related queries resolved autonomously.',
    },
    {
      icon: <ShieldCheckIcon />,
      iconBgClass: 'bg-yellow-100',
      title: '99.9%',
      description: 'Uptime during peak banking and tax seasons.',
    },
  ],
  education: [
    {
      icon: <UsersIcon />,
      iconBgClass: 'bg-indigo-100',
      title: '1.5M+',
      description: 'Student & faculty interactions automated daily.',
    },
    {
      icon: <AcademicCapIcon />,
      iconBgClass: 'bg-purple-100',
      title: '70%',
      description: 'Increase in student engagement on digital platforms.',
    },
    {
      icon: <PhoneIcon />,
      iconBgClass: 'bg-green-100',
      title: '24/7',
      description: 'Support for admissions, registration, and IT helpdesks.',
    },
    {
      icon: <ShieldCheckIcon />,
      iconBgClass: 'bg-yellow-100',
      title: '9.2k',
      description: 'Faculty members using the platform for course announcements.',
    },
  ],
  logistics: [
    {
      icon: <TruckIcon />,
      iconBgClass: 'bg-teal-100',
      title: '4.1M',
      description: 'Daily tracking updates processed automatically.',
    },
    {
      icon: <ClipboardCheckIcon />,
      iconBgClass: 'bg-amber-100',
      title: '98.5%',
      description: 'Order accuracy through automated verification.',
    },
    {
      icon: <UserCheckIcon />,
      iconBgClass: 'bg-orange-100',
      title: '60%',
      description: 'Reduction in customer service calls for "where is my order?".',
    },
    {
      icon: <PhoneIcon />,
      iconBgClass: 'bg-green-100',
      title: '30k',
      description: 'Proactive delivery notifications sent per hour.',
    },
  ],
  health: [
    {
      icon: <HeartIcon />,
      iconBgClass: 'bg-pink-100',
      title: '400k+',
      description: 'Patient appointment reminders and follow-ups scheduled.',
    },
    {
      icon: <CalendarIcon />,
      iconBgClass: 'bg-red-100',
      title: '75%',
      description: 'Reduction in no-shows due to automated reminders.',
    },
    {
      icon: <ShieldCheckIcon />,
      iconBgClass: 'bg-yellow-100',
      title: 'HIPAA',
      description: 'Compliant and secure patient data handling.',
    },
    {
      icon: <UserCheckIcon />,
      iconBgClass: 'bg-orange-100',
      title: '1.2M',
      description: 'Telehealth queries handled autonomously last quarter.',
    },
  ]
};

const tabs = [
  { id: 'financial', text: 'Financial Services', icon: <BriefcaseIcon /> },
  { id: 'education', text: 'Education', icon: <AcademicCapIcon /> },
  { id: 'logistics', text: 'Logistics', icon: <TruckIcon /> },
  { id: 'health', text: 'Health Care', icon: <HeartIcon /> }
];


// --- Main Section Component (Updated) ---
const NetworkSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentStats = allStatsData[activeTab];

  return (
    <div className="w-full max-w-[100%] mx-auto p-6 md:p-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="text-center mb-10">
        <h1 className="text-4xl uppercase  lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Our Network. Your Growth.
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {tabs.map((tab) => (
          <PillButton
            key={tab.id}
            icon={tab.icon}
            text={tab.text}
            onClick={() => setActiveTab(tab.id)}
            isActive={activeTab === tab.id}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Stats Column */}
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <div className="space-y-8">
            {currentStats.map((stat) => (
              <StatItem
                key={stat.title}
                icon={stat.icon}
                iconBgClass={stat.iconBgClass}
                title={stat.title}
                description={stat.description}
              />
            ))}
          </div>
        </div>
        
        {/* Map Column */}
        <div className="w-full lg:w-3/5 xl:w-2/3 flex items-center justify-center min-h-[300px] lg:min-h-0">
          <WorldMap />
        </div>
      </div>
    </div>
  );
};

export default NetworkSection;