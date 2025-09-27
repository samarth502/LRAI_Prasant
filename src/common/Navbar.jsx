import React, { useState, useEffect } from 'react';

// Reusable Dropdown and Nav Link component with smooth transitions
const NavLink = ({ title, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className="uppercase flex items-center space-x-2 py-2 px-4 text-sm font-medium text-gray-200 hover:text-green-400 transition-colors duration-300">
        <span>{title}</span>
        {dropdownItems && (
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 transform group-hover:rotate-180`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        )}
      </a>
      {dropdownItems && (
        <div className={`absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-20`}>
          <ul className="py-2">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to prevent layout issues
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const industriesDropdown = ["Manufacturing", "Media", "Healthcare", "Technology"];
  const resourcesDropdown = ["Blog", "Documentation"];

  return (
    // Outer container for overall styling
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black font-sans antialiased text-white">

      {/* Navbar Container - ADDED fixed, top-0, and w-full */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg z-50">
        {/* Logo Section */}
        <div className="flex items-center">
         <a href="#" className="flex flex-col items-center flex-shrink-0 space-y-1">
  <img
    src="/logo.jpeg"
    alt="Logo"
    className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-md object-cover hover:scale-105 transition-transform duration-300"
  />
 
</a>

        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center">
          <NavLink title="About" />
          <NavLink title="Services" />
          <NavLink title="Industries" dropdownItems={industriesDropdown} />
          <NavLink title="Resources" dropdownItems={resourcesDropdown} />
          <NavLink title="Case Studies" />
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 rounded-md transition-colors duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Placeholder div for fixed navbar height - RECOMMENDED for content below */}
      <div className="h-20"></div>

      {/* Mobile Menu (conditionally rendered) */}
      <div
        className={`fixed inset-x-0 top-16 bg-gray-900 bg-opacity-95 backdrop-filter backdrop-blur-lg shadow-lg z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          <a href="#" className="NavbarA block w-full py-2 text-lg text-gray-200 hover:text-green-400 transition-colors duration-200">
            About
          </a>
          <a href="#" className=" NavbarA block w-full py-2 text-lg text-gray-200 hover:text-green-400 transition-colors duration-200">
            Services
          </a>
          {/* NavLink component will handle its own internal dropdown logic, but it's nested here for mobile */}
          <div className="w-full">
            <NavLink title="Industries" dropdownItems={industriesDropdown} />
          </div>
          <div className="w-full">
            <NavLink title="Resources" dropdownItems={resourcesDropdown} />
          </div>
          <a href="#" className=" NavbarA block w-full py-2 text-lg text-gray-200 hover:text-green-400 transition-colors duration-200">
            Case Studies
          </a>
          {/* You might want to uncomment the mobile action button */}
          {/* <a
            href="#"
            className="w-full text-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            Get in Touch
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;