"use client";
import Image from "next/image";
import Title from "../shared/Titile/Title";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { FiCode, FiLayers, FiTrendingUp } from "react-icons/fi";

const AboutMe = (): React.ReactElement => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && contentRef.current && imageRef.current) {
          const progress = 1 - rect.top / window.innerHeight;

          // Parallax effect for image
          const imageTranslateY = progress * 50;
          imageRef.current.style.transform = `translateY(${imageTranslateY}px)`;

          // Fade in effect for content
          const contentOpacity = Math.min(1, progress * 2);
          contentRef.current.style.opacity = contentOpacity.toString();
          contentRef.current.style.transform = `translateY(${
            20 - progress * 20
          }px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="aboutMe"
      ref={sectionRef}
      className="relative overflow-hidden scroll-mt-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 py-0 md:py-16 lg:py-24"
    >
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-10 md:-left-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-50 to-gray-100 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-1/4 -right-10 md:-right-20 w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-l from-blue-50 to-gray-100 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 md:h-64 bg-gradient-to-r from-transparent via-gray-200/10 to-transparent opacity-20"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px)`,
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full border-r border-gray-400" />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Title className="mb-8 md:mb-12 lg:mb-16">
            <span className="inline-block">About Tasin</span>
          </Title>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image Carousel with Parallax */}
            <div
              ref={imageRef}
              className="lg:w-2/5 w-full relative transition-transform duration-300 ease-out"
            >
              <div className="relative group">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full mx-auto"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {[
                      "/images/nodejs.png",
                      "/images/front.png",
                      "/images/back.png",
                    ].map((src, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/5 z-10" />
                          <Image
                            src={src}
                            alt="kausar-ahmad-tasin"
                            fill
                            priority={index === 0}
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="flex justify-center gap-4 mt-4 md:mt-6">
                    <CarouselPrevious className="bg-white border-gray-300 shadow-md h-8 w-8 md:h-10 md:w-10" />
                    <CarouselNext className="bg-white border-gray-300 shadow-md h-8 w-8 md:h-10 md:w-10" />
                  </div>
                </Carousel>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border border-gray-300 rounded-xl opacity-20 -rotate-12" />
                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 border border-gray-300 rounded-xl opacity-20 rotate-12" />
              </div>
            </div>

            {/* Content with Parallax */}
            <div
              ref={contentRef}
              className="lg:w-3/5 w-full space-y-6 md:space-y-8 transition-all duration-700 ease-out"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                    Developing{" "}
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Digital Excellence
                    </span>
                  </h3>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-full text-gray-700 text-xs md:text-sm font-medium shadow-sm">
                      <FiCode className="w-3 h-3 md:w-4 md:h-4" />
                      Full-Stack Development
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-full text-gray-700 text-xs md:text-sm font-medium shadow-sm">
                      <FiLayers className="w-3 h-3 md:w-4 md:h-4" />
                      Scalable Architecture
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-full text-gray-700 text-xs md:text-sm font-medium shadow-sm">
                      <FiTrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                      Performance Focused
                    </span>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p className="md:text-lg">
                    <span className="font-semibold text-gray-900">
                      Kausar Ahmad Tasin
                    </span>{" "}
                    is a{" "}
                    <span className="font-semibold text-gray-900">
                      dedicated Software Engineer
                    </span>{" "}
                    with{" "}
                    <span className="font-semibold text-gray-900">
                      1.5+ years of experience
                    </span>{" "}
                    in crafting robust Fullstack systems and scalable
                    applications.
                  </p>

                  <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-900 rounded-full" />
                      Technical Expertise
                    </h4>
                    <p>
                      With specialization in{" "}
                      <span className="font-semibold text-gray-900">
                        Node.js, TypeScript
                      </span>
                      , and modern databases, he builds{" "}
                      <span className="font-semibold text-gray-900">
                        high-performance APIs
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-gray-900">
                        scalable architectures
                      </span>{" "}
                      that power exceptional digital experiences.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-900 rounded-full" />
                      Development Philosophy
                    </h4>
                    <p>
                      His approach emphasizes{" "}
                      <span className="font-semibold text-gray-900">
                        clean, maintainable code
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-gray-900">
                        thoughtful architecture
                      </span>
                      . Every solution is designed to{" "}
                      <span className="font-semibold text-gray-900">
                        scale seamlessly
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-gray-900">
                        perform efficiently
                      </span>
                      , combining best practices with continuous innovation.
                    </p>
                  </div>

                  <p className="md:text-lg font-medium text-gray-900 pt-4 border-t border-gray-100">
                    Collaboration with Kausar brings the opportunity to
                    transform visions into{" "}
                    <span className="font-bold">
                      production-ready, scalable solutions
                    </span>{" "}
                    that deliver real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
