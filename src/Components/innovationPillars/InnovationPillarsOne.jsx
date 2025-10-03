import React from 'react';
import { Lightbulb, Cpu, FlaskConical, LayoutGrid, Zap, TrendingUp, CheckCircle } from 'lucide-react';

// --- Data Structure for Innovation Pillars ---
const innovationPillars = [
  {
    icon: Lightbulb,
    title: "Strategic Product Thinking",
    description: "We go beyond code, applying a product mindset to every project. From idea validation to scalable delivery, we align technology with business goals to build solutions that make a real difference.",
  },
  {
    icon: LayoutGrid,
    title: "Design-Led Engineering",
    description: "We combine intuitive design with robust engineering to create user-focused digital solutions that offer seamless functionality and brand consistency.",
  },
  {
    icon: Cpu,
    title: "Future-Ready Architecture",
    description: "Our solutions are built on modern, flexible, and scalable tech stacks to ensure long-term reliability, adaptability, and performance.",
  },
  {
    icon: Zap,
    title: "Agile-Based Delivery",
    description: "Driven by agile methodologies, we ensure fast iterations, collaborative workflows, and timely delivery, with continuous value at every sprint.",
  },
  {
    icon: FlaskConical,
    title: "Innovation Lab Culture",
    description: "We foster a culture of continuous experimentation, enabling our teams to rapidly test ideas, explore emerging technologies, and deliver breakthrough solutions.",
  },
  {
    icon: TrendingUp,
    title: "Result-Oriented Project Management",
    description: "Our execution focuses on measurable outcomes and structured processes, guaranteeing that technological efforts directly translate into business success.",
  },
];

// --- Reusable Pillar Card Component ---
const PillarCard = ({ icon: Icon, title, description }) => (
  <div
    className="
      bg-white p-6 rounded-xl shadow-lg
      transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl
      border border-gray-100 hover:border-emerald-400
      h-full flex flex-col
    "
  >
    <div className="flex items-start mb-4">
      <div className="p-3 bg-emerald-50 rounded-full text-emerald-600 shadow-md mr-4 flex-shrink-0">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-1 leading-snug">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

// --- Unique Image/Experience Block Component ---
const ImageBlock = () => (
  <div className="relative w-full h-full min-h-[500px] md:min-h-0 md:h-auto">
    {/* Main Image Container with rounded, slightly rotated look */}
    <div className="absolute inset-0 md:relative md:inset-auto">
      <img
        src="https://www.innovationm.com/assets/images/home/side_card_back_img.webp"
        alt="Team collaborating on modern digital innovation"
        className="
          w-full h-full object-cover rounded-3xl shadow-2xl
          transform md:rotate-[-2deg]
          transition duration-500 ease-in-out
          opacity-90 hover:opacity-100
        "
        // Fallback for image loading error
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/059669/ffffff?text=Innovation+Team'; }}
      />
    </div>

    {/* Overlay Text Box (15+ Years in Industry) */}
    <div
      className="
        absolute bottom-4 right-4 md:bottom-[-20px] md:right-[-40px]
        p-8 bg-gray-900 text-white rounded-xl shadow-2xl
        z-10 w-2/3 max-w-[200px]
        flex flex-col items-center justify-center text-center
        border-4 border-emerald-400
        transform rotate-[2deg]
      "
    >
      <CheckCircle className="text-emerald-400 mb-2 w-8 h-8" />
      <p className="text-4xl font-extrabold leading-none mb-1">15+</p>
      <p className="text-sm font-medium uppercase tracking-wider text-emerald-200">
        Years in Industry
      </p>
    </div>
  </div>
);


// --- Main Application Component ---
const InnovationPillarsOne = () => {
  return (
    <div className=" bg-gray-50 font-sans p-4 md:p-8 lg:p-7 antialiased">
      <div className="max-w-[90%] mx-auto py-5 lg:py-2">
        {/* Header Section */}
        <header className="mb-12 text-center lg:text-left">
          <p className="text-lg font-semibold text-emerald-600 uppercase tracking-widest mb-2">
            Innovation Pillars
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Driving Business Impact with <br className="hidden md:inline"/> Modern Digital Innovation
          </h1>
        </header>

        {/* Content Grid: Image Block (Left) and Pillars (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left Column: Image Block */}
          <div className="lg:sticky lg:top-8 self-start">
            <ImageBlock />
          </div>

          {/* Right Column: Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {innovationPillars.map((pillar, index) => (
              <PillarCard
                key={index}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
        
        {/* Subtle Bottom Accent (matching the original image) */}
        <div className="flex justify-end mt-12">
            <div className="p-3 bg-emerald-500 rounded-full shadow-lg cursor-pointer hover:bg-emerald-600 transition">
                <span role="img" aria-label="Chatbot icon" className="text-white text-xl">🤖</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationPillarsOne;
