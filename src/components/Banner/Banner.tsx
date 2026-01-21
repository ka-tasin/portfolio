"use client";

import React, { useEffect, useState } from "react";
import { FiArrowRight, FiCode, FiServer, FiDatabase } from "react-icons/fi";

const Banner = (): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeWord, setActiveWord] = useState(0);

  const techWords = ["Node.js", "TypeScript", "PostgreSQL", "MongoDB", "React.js", "Next.js"];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % techWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white scroll-mt-16 w-full"
    >
      {/* Geometric Background Pattern - Full width */}
      <div className="absolute inset-0 overflow-hidden z-0 w-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-200 opacity-20 transform -rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-gray-200 opacity-20 transform rotate-45" />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-gray-200 opacity-15" />

        {/* Grid Lines - Full width */}
        <div className="absolute inset-0 grid grid-cols-12 gap-0 opacity-5 w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-r border-gray-900" />
          ))}
        </div>
      </div>

      {/* Content Container - Full width with centered content - REMOVED PADDING */}
      <div className="w-full relative mt-24 z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Introduction */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-0.5 bg-gray-900" />
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                Full Stack Engineer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              Kausar Ahmad Tasin
              <span className="block text-lg font-normal text-gray-600 mt-4">
                Building Scalable Digital Solutions
              </span>
            </h1>

            {/* Tech Stack Animation */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FiCode className="w-5 h-5 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Specialized in
                </h3>
              </div>

              <div className="relative h-8">
                {techWords.map((word, index) => (
                  <span
                    key={word}
                    className={`absolute left-0 text-lg font-medium transition-all duration-500 ${
                      index === activeWord
                        ? "opacity-100 translate-y-0 text-gray-900"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {word}
                    {index === activeWord && (
                      <span className="ml-2 inline-block w-2 h-2 bg-gray-900 animate-pulse" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div
              className={`mb-10 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                A dedicated software engineer with{" "}
                <span className="font-semibold text-gray-900">1.5+ years</span>{" "}
                of professional experience, specializing in backend development.
                Proficient in architecting robust, scalable applications with
                modern technologies. Focused on delivering high-quality,
                efficient solutions through clean architecture and best
                practices.
              </p>
            </div>

            {/* Stats & CTA */}
            <div
              className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Quick Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <FiServer className="w-5 h-5 text-gray-900" />
                    <span className="text-2xl font-bold text-gray-900">
                      1.5+
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    Years Experience
                  </span>
                </div>

                <div className="text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <FiDatabase className="w-5 h-5 text-gray-900" />
                    <span className="text-2xl font-bold text-gray-900">
                      50+
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    Projects Completed
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactClick}
                  className="group relative px-8 py-3 bg-gray-900 text-white font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-gray-800"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>

                <a
                  href="https://drive.google.com/file/d/169nlqqlRYAkchtCA8Ix69uXm8Sv9XW6m/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 border border-gray-900 text-gray-900 font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white"
                >
                  View Resume
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`mt-20 transition-all duration-1000 delay-1200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 mb-2 tracking-wider">
                  EXPLORE PORTFOLIO
                </span>
                <div className="w-px h-12 bg-gray-300 overflow-hidden">
                  <div className="w-full h-full bg-gray-900 animate-scrollIndicator" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollIndicator {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .animate-scrollIndicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
