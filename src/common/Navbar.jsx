// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom'; 
// import { ChevronDown, Menu, X, Rocket, Zap, Users } from 'lucide-react';

// // --- Framer Motion Variants for Animations ---

// // Navbar Container entry animation
// const navbarVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.1 } },
// };

// // Mobile Menu slide-in/out animation
// const mobileMenuVariants = {
//     hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
//     visible: { 
//         opacity: 1, 
//         height: 'auto', 
//         transition: { type: 'spring', stiffness: 100, damping: 20, staggerChildren: 0.05, delayChildren: 0.2 } 
//     },
// };

// // Individual item animation for mobile menu
// const mobileItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0 },
// };

// // --- Reusable Nav Link Component ---

// const NavLink = ({ title, dropdownItems, to, onClick }) => {
//     // Only used for complex dropdowns (e.g., Industries, Resources)
//     if (dropdownItems) {
//         return (
//             <div className="relative group flex items-center h-full">
//                 <a href="#" className="uppercase flex items-center space-x-2 py-2 px-4 text-sm font-semibold text-gray-200 hover:text-indigo-400 transition-colors duration-300 group-hover:text-indigo-400">
//                     <span>{title}</span>
//                     <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 transform group-hover:rotate-180`} />
//                 </a>
                
//                 {/* Desktop Dropdown Content */}
//                 <div className="absolute top-full -left-4 mt-2 w-48 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-20 border border-gray-700">
//                     <ul className="py-2">
//                         {dropdownItems.map((item, index) => (
//                             <li key={index}>
//                                 <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-indigo-700/50 hover:text-white transition-colors duration-200">
//                                     {item}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         );
//     }

//     // Standard Nav Link (uses Link for routing)
//     return (
//         <Link 
//             to={to || "#"}
//             onClick={onClick}
//             className="group relative h-full flex items-center px-4 py-2 text-sm font-semibold uppercase text-gray-300 transition-colors duration-300 hover:text-indigo-400"
//         >
//             <span>{title}</span>
//             {/* Subtle bottom line indicator on hover */}
//             <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 rounded-full group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"></span>
//         </Link>
//     );
// };

// // --- Main Premium Navbar Component ---

// const PremiumNavbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // Close mobile menu on resize and check scroll position
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1024) {
//                 setIsMobileMenuOpen(false);
//             }
//         };
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
        
//         window.addEventListener('resize', handleResize);
//         window.addEventListener('scroll', handleScroll);
        
//         return () => {
//             window.removeEventListener('resize', handleResize);
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const industriesDropdown = ["Manufacturing", "Media", "Healthcare", "Technology"];
//     const resourcesDropdown = ["Blog", "Documentation"];

//     // Mobile Menu Close Handler
//     const handleLinkClick = () => {
//         setIsMobileMenuOpen(false);
//     };


//     return (
//         // Outer Wrapper (Required for full component setup)
//         <div className="font-sans antialiased text-white">

//             {/* Fixed Navbar Container (Animated & Glassy) */}
//             <motion.nav
//                 initial="hidden"
//                 animate="visible"
//                 variants={navbarVariants}
//                 className={`
//                     fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 md:py-1 transition-all duration-300 
//                     bg-black backdrop-filter backdrop-blur-xl z-50
//                     ${scrolled ? 'shadow-2xl border-b border-indigo-900/50' : 'border-b border-transparent'}
//                 `}
//             >
                
//              {/* Logo Section - UPDATED TO USE UPLOADED IMAGE */}
//                 <div className="flex items-center">
//                     <Link to="/" className="flex items-center flex-shrink-0 space-x-3 group">
                        
//                         {/* --- LOGO IMAGE INSERTED HERE --- */}
//                         <img 
//                             src="https://yt3.googleusercontent.com/AYkmqM1WLvgkcCxgG-ueWKa996bkx8BCipUKDGbqkb7cq8CF4ErBtHGhTu4opnqAEzWrn4s_dg=s160-c-k-c0x00ffffff-no-rj"
//                             alt="Company Logo"
//                             // Styling for a premium, slightly animated look
//                             className="w-18 h-18 rounded-full object-cover transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 border-2 border-indigo-400 shadow-xl"
//                         />
//                         {/* ---------------------------------- */}

//                     </Link>
//                 </div>

//                 {/* Navigation Links (Desktop) */}
//                 <div className="hidden lg:flex items-center h-full space-x-2">
//                     <NavLink title="Home" to="/" />
//                     <NavLink title="About" to="/about" />
//                     <NavLink title="Solution" to="/services" />
//                     <NavLink title="Demo Video" to="/insights" />
//                     <NavLink title="Career" to="/career" />

                    
//                     {/* <NavLink title="Industries" dropdownItems={industriesDropdown} />
//                     <NavLink title="Resources" dropdownItems={resourcesDropdown} /> */}
//                     {/* <NavLink title="Case Studies" to="/case-studies" /> */}
//                 </div>

//                 {/* Action Button */}
//                 <div className="hidden lg:flex items-center">
//                     <Link
//                         to="/contact"
//                         className="
//                           px-6 py-2.5 text-sm font-bold rounded-full 
//                           bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
//                           shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/50
//                           transform hover:scale-[1.03] transition-all duration-300 ease-in-out
//                           flex items-center space-x-2
//                         "
//                     >
//                         <Users size={18} className="text-white"/>
//                         <span>Contact Us</span>
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="lg:hidden">
//                     <button
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         type="button"
//                         className="p-2 text-indigo-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-lg transition-colors duration-200"
//                     >
//                         {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
//                     </button>
//                 </div>
//             </motion.nav>

//             {/* Placeholder div for fixed navbar height */}
//             <div className="h-20"></div>
            
//             {/* Mobile Menu (Animated Slide-out) */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <motion.div
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         variants={mobileMenuVariants}
//                         className="fixed inset-x-0 top-[70px] bg-gray-900/95 backdrop-blur-lg shadow-2xl z-40 lg:hidden border-t border-indigo-900"
//                     >
//                         <motion.div 
//                             variants={containerVariants}
//                             className="flex flex-col items-start p-6 space-y-3"
//                         >
//                             <motion.div variants={mobileItemVariants} className='w-full'>
//                                 <NavLink title="Home" to="/" onClick={handleLinkClick} />
//                             </motion.div>
//                             <motion.div variants={mobileItemVariants} className='w-full'>
//                                 <NavLink title="About" to="/about" onClick={handleLinkClick} />
//                             </motion.div>
//                             <motion.div variants={mobileItemVariants} className='w-full'>
//                                 <NavLink title="Services" to="/services" onClick={handleLinkClick} />
//                             </motion.div>
//                              <motion.div variants={mobileItemVariants} className='w-full'>
//                                 <NavLink title="Insights" to="/insights" onClick={handleLinkClick} />
//                             </motion.div>
                            
//                             {/* Dropdown in Mobile - handled by NavLink's internal logic */}
//                             <motion.div variants={mobileItemVariants} className="w-full">
//                                 <NavLink title="Industries" dropdownItems={industriesDropdown} onClick={handleLinkClick} />
//                             </motion.div>
//                             <motion.div variants={mobileItemVariants} className="w-full">
//                                 <NavLink title="Resources" dropdownItems={resourcesDropdown} onClick={handleLinkClick} />
//                             </motion.div>
                            
//                             {/* Mobile Contact Button */}
//                             <motion.div variants={mobileItemVariants} className="w-full pt-4">
//                                 <Link to="/contact" onClick={handleLinkClick}
//                                     className="w-full text-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold shadow-md hover:opacity-90 transition-opacity duration-300 block"
//                                 >
//                                     Start a Consultation
//                                 </Link>
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// // Container variants for mobile stagger (defined outside for clarity)
// const containerVariants = {
//     visible: {
//         transition: {
//             staggerChildren: 0.05,
//         },
//     },
// };

// export default PremiumNavbar;







import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { ChevronDown, Menu, X, Users } from 'lucide-react';

// --- Framer Motion Variants for Animations ---
const navbarVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.1 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  visible: { 
    opacity: 1, 
    height: 'auto', 
    transition: { type: 'spring', stiffness: 100, damping: 20, staggerChildren: 0.05, delayChildren: 0.2 } 
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

// --- Reusable Nav Link Component ---
const NavLink = ({ title, dropdownItems, to, onClick }) => {
  if (dropdownItems) {
    return (
      <div className="relative group flex items-center h-full">
        <a
          href="#"
          className="uppercase flex items-center space-x-2 py-2 px-4 text-sm font-semibold text-gray-200 hover:text-indigo-400 transition-colors duration-300 group-hover:text-indigo-400"
        >
          <span>{title}</span>  
          <ChevronDown size={14} className="text-gray-400 transition-transform duration-300 transform group-hover:rotate-180" />
        </a>

        {/* Dropdown Menu (Desktop) */}
        <div className="absolute top-full -left-4 mt-2 w-48 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-20 border border-gray-700 mt-5">
          <ul className="py-2">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  onClick={onClick}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-indigo-700/50 hover:text-white transition-colors duration-200"
                >   
                  {item.label}
                </Link>

              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={to || "#"}
      onClick={onClick}
      className="group relative h-full flex items-center px-4 py-2 text-sm font-semibold uppercase text-gray-300 transition-colors duration-300 hover:text-indigo-400"
    >
      <span>{title}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-500 rounded-full group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"></span>
    </Link>
  );
};

// --- Main Premium Navbar Component ---
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const industriesDropdown = ["Manufacturing", "Media", "Healthcare", "Technology"];
  const resourcesDropdown = ["Blog", "Documentation"];
  
  // ✅ Added Dropdown for "Solution"
  const solutionDropdown = [
    { label: "AI Call Center", to: "/AiCallCenterOne" },
    { label: "AI City", to: "/RinggUseCases" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans antialiased text-white">
      {/* Fixed Navbar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`
          fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 md:py-1 transition-all duration-300 
          bg-black backdrop-filter backdrop-blur-xl z-50
          ${scrolled ? 'shadow-2xl border-b border-indigo-900/50' : 'border-b border-transparent'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center flex-shrink-0 space-x-3 group">
            <img
              src="https://yt3.googleusercontent.com/AYkmqM1WLvgkcCxgG-ueWKa996bkx8BCipUKDGbqkb7cq8CF4ErBtHGhTu4opnqAEzWrn4s_dg=s160-c-k-c0x00ffffff-no-rj"
              alt="Company Logo"
              className="w-18 h-18 rounded-full object-cover transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 border-2 border-indigo-400 shadow-xl"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center h-full space-x-2">
          <NavLink title="Home" to="/" />
          <NavLink title="About" to="/about" />
          {/* ✅ Solution Dropdown Added Here */}
          <NavLink title="Solution" dropdownItems={solutionDropdown} />
          <NavLink title="Demo Video" to="/insights" />
          <NavLink title="Career" to="/career" />
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="
              px-6 py-2.5 text-sm font-bold rounded-full 
              bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
              shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/50
              transform hover:scale-[1.03] transition-all duration-300 ease-in-out
              flex items-center space-x-2
            "
          >
            <Users size={18} className="text-white"/>
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="p-2 text-indigo-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-lg transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {/* Placeholder for fixed navbar height */}
      <div className="h-20"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed inset-x-0 top-[70px] bg-gray-900/95 backdrop-blur-lg shadow-2xl z-40 lg:hidden border-t border-indigo-900"
          >
            <motion.div 
              variants={containerVariants}
              className="flex flex-col items-start p-6 space-y-3"
            >
              <motion.div variants={mobileItemVariants} className='w-full'>
                <NavLink title="Home" to="/" onClick={handleLinkClick} />
              </motion.div>
              <motion.div variants={mobileItemVariants} className='w-full'>
                <NavLink title="About" to="/about" onClick={handleLinkClick} />
              </motion.div>
              {/* ✅ Solution Dropdown for Mobile */}
              <motion.div variants={mobileItemVariants} className='w-full'>
                <NavLink title="Solution" dropdownItems={solutionDropdown} onClick={handleLinkClick} />
              </motion.div>
              <motion.div variants={mobileItemVariants} className='w-full'>
                <NavLink title="Demo Video" to="/insights" onClick={handleLinkClick} />
              </motion.div>
              <motion.div variants={mobileItemVariants} className='w-full'>
                <NavLink title="Career" to="/career" onClick={handleLinkClick} />
              </motion.div>
              <motion.div variants={mobileItemVariants} className="w-full pt-4">
                <Link 
                  to="/contact" 
                  onClick={handleLinkClick}
                  className="w-full text-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold shadow-md hover:opacity-90 transition-opacity duration-300 block"
                >
                  Start a Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
export default Navbar;
