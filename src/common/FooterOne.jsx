import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

// Define the navigation link groups
const footerLinks = [
    {
        title: 'Company',
        links: [
            { name: 'About Us', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'Contact Us', href: '#contact' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'Industries', href: '#industries' },
            { name: 'Case Studies', href: '#cases' },
            { name: 'Blogs', href: '#blogs' },
        ]
    },
];

// Reusable Link Component
const FooterLink = ({ name, href }) => (
    <li>
        <a 
            href={href} 
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-base"
            aria-label={`Maps to ${name} section`}
        >
            {name}
        </a>
    </li>
);

// --- Main Footer Component ---
const FooterOne = () => {
    // Placeholder for a detailed, high-resolution logo (replace with actual SVG/Image)
    const LogoPlaceholder = () => (
        <div className="flex items-center space-x-2">
            <svg 
                className="w-8 h-8 text-indigo-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span className="text-2xl font-extrabold text-gray-800">RL<span className="text-indigo-500 ">AI</span></span>
            <p className="text-xs font-medium text-gray-500 tracking-wider">Technology Solutions</p>
        </div>
    );

    return (
        <footer className="bg-gray-100/50 pt-16 border-t border-gray-200 font-sans antialiased">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: Logo, Address, Links, Contact */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12">
                    
                    {/* Column 1: Logo and Address */}
                    <div className="md:col-span-2 lg:col-span-2 space-y-4">
                        <LogoPlaceholder />
                        <p className="text-gray-600 max-w-sm mt-4 text-sm">
                           Corporate office - 195, 43rd Main Rd,Chartered House, Jawaregowda Nagar, Javarandoddi, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-3 pt-2">
                            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full   bg-indigo-500 text-white transition-colors duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Facebook" className="p-2 rounded-full text-gray-700 bg-indigo-500 text-white transition-colors duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Twitter" className="p-2 rounded-full text-gray-700 bg-indigo-500 text-white transition-colors duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="p-2 rounded-full text-gray-700 bg-indigo-500 text-white transition-colors duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Columns 2 & 3: Navigation Links */}
                    {footerLinks.map((group, index) => (
                        <div key={index}>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider">{group.title}</h4>
                            <ul className="space-y-3">
                                {group.links.map((link, i) => (
                                    <FooterLink key={i} {...link} />
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 4 (LG: Column 5): Email Contact */}
                    <div className="lg:col-span-1">
                         <h4 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider">Get in Touch</h4>
                         <div className="flex items-center space-x-2">
                            <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                            <a 
                                href="mailto:info@rightleft.ai" 
                                className="text-gray-600 hover:text-emerald-500 transition-colors duration-200 text-base font-medium"
                            >
                      info@rightleft.ai
                            </a>
                         </div>
                         <p className="mt-2 text-sm text-gray-500">We respond within 24 hours.</p>
                    </div>

                </div>

                {/* Bottom Bar: Copyright and Legal */}
                <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm text-gray-500">
                        Copyright &copy; InnovationM 2025. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-3 md:mt-0">
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                            Privacy Policy
                        </a>
                        <span className="text-sm text-gray-400">|</span>
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;
