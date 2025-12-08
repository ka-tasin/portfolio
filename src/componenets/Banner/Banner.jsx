"use client";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative mx-auto scroll-mt-16 pt-4  overflow-hidden lg:h-[550px]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6DEB8D] opacity-20 rounded-full blur-[120px] z-0" />
      <div>
        <div className="lg:container lg:mx-auto mx-4 md:mb-10 pt-24 pb-10 lg:py-20">
          <div className="text-center animate__animated animate__fadeInUp">
            <h1 className="md:text-5xl lg:mt-10 md:mt-4 mt-2 text-4xl">
              {" "}
              Hello,{" "}
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r via-lime-300 to-lime-500 from-[#66ec97]">
                I&apos;m Kausar Ahmad Tasin,
              </span>
            </h1>
            <p className="md:text-3xl text-2xl mt-6">Software Engineer</p>
            <p className="mt-8 lg:w-4/5 text-lg mx-auto">
              A self-driven software engineer with 1.5+ years of hands-on
              experience, focused on backend development. Skilled in building
              scalable{" "}
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 text-lg to-lime-500">
                Node.js and TypeScript
              </span>{" "}
              applications with PostgreSQL and MongoDB. Proficient in API
              design, testing, debugging, and software best practices, with
              real-world job experience delivering high-quality, efficient
              solutions. Always eager to expand my skills and contribute to
              exciting projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
