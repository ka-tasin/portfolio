"use client";
import React, { useState, useEffect } from "react";
import { FiMail, FiLinkedin, FiGithub, FiExternalLink } from "react-icons/fi";

const Footer = (): React.ReactElement => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:kausar.ahmad.tasin01@gmail.com",
      icon: <FiMail className="w-4 h-4" />,
      label: "Send email"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kausar-ahmad-tasin/",
      icon: <FiLinkedin className="w-4 h-4" />,
      label: "Visit LinkedIn profile",
      external: true
    },
    {
      name: "GitHub",
      url: "https://github.com/KausarAhmadTasin",
      icon: <FiGithub className="w-4 h-4" />,
      label: "Visit GitHub profile",
      external: true
    }
  ];

  return (
    <footer className={`bg-gray-900 border-t border-gray-800 py-8 w-full transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                KAUSAR AHMAD TASIN
              </h3>
              <p className="text-sm text-gray-400 font-medium tracking-wider uppercase">
                Full Stack Engineer
              </p>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Crafting digital experiences with modern technologies
                and clean architecture.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Connect
            </h4>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  aria-label={link.label}
                  className="group relative p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {link.name}
                    </span>
                    {link.external && (
                      <FiExternalLink className="w-3 h-3 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                    )}
                  </div>
                  
                  {/* Hover Effect Line */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            
            <div className="mt-6 text-center lg:text-right">
              <p className="text-gray-500 text-xs font-medium tracking-wider">
                Available for new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Kausar Ahmad Tasin. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Version 1.0 • Last updated: {new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                year: 'numeric' 
              })}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              Designed & Developed by{" "}
              <span className="text-gray-300 font-medium hover:text-white transition-colors duration-300 cursor-pointer">
                Kausar Ahmad Tasin
              </span>
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Built with React • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>

        {/* Copyright Badge */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700">
              <span className="text-gray-400 text-xs font-mono tracking-wider">
                {"</>"} with dedication
              </span>
              <span className="ml-2 w-1.5 h-1.5 bg-green-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;