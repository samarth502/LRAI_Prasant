import React from "react";
import { Phone } from "lucide-react";

const AiCallCenterOne = () => {
  return (
    <section className="relative w-full mt-3 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 text-center px-6 md:px-12 overflow-hidden">
      {/* Background Pattern (Optional subtle waves) */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="0.3"
            d="M0 50 Q25 45 50 50 T100 50"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0 50 Q25 45 50 50 T100 50;
                M0 50 Q25 55 50 50 T100 50;
                M0 50 Q25 45 50 50 T100 50;
              "
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[98%]">
        <h1 className="uppercase text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          AI Agents That Help You Scale
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-600 mt-2">
          Last Mile Delivery<span className="animate-pulse">|</span>
        </h2>

        {/* Subtext */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-x-2 text-gray-500 text-sm">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="text-purple-600 font-semibold">Online</span>
          </span>
          <p>Try our demo. Experience the magic.</p>
        </div>

        {/* Input Box */}
        <div className="mt-6 bg-white shadow-xl rounded-full flex items-center px-4 py-2 w-full md:w-[500px] mx-auto border border-gray-200">
          {/* Country flag */}
          <div className="flex items-center space-x-2 border-r border-gray-300 pr-3">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India"
              className="w-6 h-4 rounded-sm"
            />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter number"
            className="flex-1 ml-3 text-gray-700 text-base focus:outline-none bg-transparent placeholder-gray-400"
          />

          {/* Button */}
          <button className="ml-3 flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300">
            <Phone size={16} />
            <span>Try Ringg</span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700">
          <div className="flex flex-col items-center">
            <Phone className="mb-2" />
            <h3 className="text-xl font-bold">10,000+</h3>
            <p className="text-sm text-gray-500">Concurrent Calls</p>
          </div>

          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mb-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-bold">99.9%</h3>
            <p className="text-sm text-gray-500">Adherence</p>
          </div>

          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mb-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 className="text-xl font-bold">20+</h3>
            <p className="text-sm text-gray-500">Languages Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCallCenterOne;
