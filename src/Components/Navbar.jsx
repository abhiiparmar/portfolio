import React, { useState } from "react";
import profileImg from "../assets/linkdinLogo.jpeg";

function Navbar() {
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-xl shadow-2xl h-16">
      <div className="max-w-7xl mx-auto  h-full flex items-center justify-between relative">

        {/* Logo + Name */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <img
            src={profileImg}
            alt="Profile"
            className="w-12 h-12 rounded-full shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent transition-all duration-500 group-hover:tracking-widest">
              Abhishek
            </span>
            <span className="text-sm md:text-lg font-medium text-blue-200 transition-colors duration-300 group-hover:text-cyan-400">
              Parmar
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer hover:text-cyan-400 transition duration-300"
            >
              <a href={`#${item.toLowerCase()}`} className="py-1">
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="absolute top-16 right-0 w-48 bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-xl flex flex-col py-4 space-y-4 text-center rounded-b-md md:hidden z-40">
            {menuItems.map((item, index) => (
              <li key={index} className="text-gray-300 hover:text-cyan-400 transition duration-300">
                <a href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
