"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavItem {
  itemName: string;
  itemPath: string;
}

const Navbar = (): React.ReactElement => {
  const [path, setPath] = useState<string>("/");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { itemName: "Home", itemPath: "/#home" },
    { itemName: "About", itemPath: "/#aboutMe" },
    { itemName: "Experience", itemPath: "/#experience" },
    { itemName: "Projects", itemPath: "/#projects" },
    { itemName: "Skills", itemPath: "/#skills" },
    { itemName: "Education", itemPath: "/#education" },
    { itemName: "Contact", itemPath: "/#contact" },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.querySelector('.drawer-content');
      const menuButton = document.querySelector('.menu-button');
      if (
        isDrawerOpen &&
        drawer &&
        !drawer.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDrawerOpen]);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavClick = (itemPath: string): void => {
    setPath(itemPath);
    setIsDrawerOpen(false);
    
    // Smooth scroll to section
    const id = itemPath.replace('/#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 bg-white transition-all duration-300 ${
      isScrolled 
        ? "border-b border-gray-200 shadow-sm py-3" 
        : "border-b border-gray-100 py-4"
    }`}>
      <div className="lg:container lg:mx-auto lg:px-12 px-6 flex justify-between items-center">
        {/* Professional Logo */}
        <div className="flex items-center">
          <a 
            href="#home" 
            onClick={() => handleNavClick("/#home")}
            className="group"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight font-sans">
                KAUSAR AHMAD
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-1">
                Full Stack Developer
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.itemName}
                onClick={() => handleNavClick(item.itemPath)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer group ${
                  path === item.itemPath
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                href={item.itemPath}
              >
                {item.itemName}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-3/4 ${
                  path === item.itemPath ? "w-3/4" : ""
                }`} />
              </a>
            ))}
          </div>

          <div className="ml-8 pl-8 border-l border-gray-200">
            <a
              href="https://drive.google.com/file/d/169nlqqlRYAkchtCA8Ix69uXm8Sv9XW6m/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative px-5 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 overflow-hidden group">
                <span className="relative z-10">Resume</span>
                <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleDrawer}
          className="lg:hidden menu-button text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <AiOutlineMenu className={`absolute inset-0 transition-all duration-300 ${
              isDrawerOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`} />
            <AiOutlineClose className={`absolute inset-0 transition-all duration-300 ${
              isDrawerOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden drawer-content fixed inset-0 top-20 bg-white z-40 transform transition-all duration-300 ease-out ${
          isDrawerOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{ pointerEvents: isDrawerOpen ? 'auto' : 'none' }}
      >
        <div className="p-6 border-t border-gray-100">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li
                key={item.itemName}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`transform transition-all duration-300 ${
                  isDrawerOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
              >
                <a
                  onClick={() => handleNavClick(item.itemPath)}
                  className={`flex items-center px-4 py-3 text-base font-medium transition-all duration-200 ${
                    path === item.itemPath
                      ? "text-gray-900 bg-gray-50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  href={item.itemPath}
                >
                  <span className={`w-1.5 h-1.5 mr-3 bg-gray-900 transition-all duration-300 ${
                    path === item.itemPath ? "opacity-100" : "opacity-0"
                  }`} />
                  {item.itemName}
                </a>
              </li>
            ))}
            
            <li className={`pt-4 mt-4 border-t border-gray-100 transform transition-all duration-300 ${
              isDrawerOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`} style={{ animationDelay: `${navItems.length * 50}ms` }}>
              <a
                href="https://drive.google.com/file/d/169nlqqlRYAkchtCA8Ix69uXm8Sv9XW6m/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full px-4 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 active:scale-[0.98]">
                  Download Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 bg-black z-30 transition-all duration-300 ${
          isDrawerOpen
            ? "opacity-50 top-20"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />
    </nav>
  );
};

export default Navbar;