"use client";

import Image from "next/image";
import Title from "../shared/Titile/Title";
import { useRef } from "react";
import { FiCalendar, FiMapPin, FiCode, FiTrendingUp } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = (): React.ReactElement => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const experiences = [
    {
      company: "Meta Infinity",
      logo: "/images/metainfinity.png",
      position: "Full Stack Developer",
      period: "Nov 2025 – Present",
      location: "Bogura, Bangladesh (On-site)",
      description: "Sister concern of M/S Janata Industries",
      points: [
        "Develop full-stack applications using modern technologies and industry best practices",
        "Architect both frontend and backend components for comprehensive software solutions",
        "Collaborate with cross-functional teams to build scalable and maintainable systems",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "React.js",
        "Next.js",
      ],
    },
    {
      company: "The Tork Inc.",
      logo: "/images/tork-circle.png",
      position: "Frontend Developer",
      period: "Dec 2024 – Apr 2025",
      location: "Chittagong, Bangladesh (On-site)",
      points: [
        "Engineered applications using Next.js, TypeScript, and Sass with optimized performance",
        "Developed LMS features including student dashboards and secure payment integration",
        "Built e-commerce features with API integration and state management using Redux.js",
        "Resolved critical production bugs and collaborated on API integration using Jira",
        "Led migration of Vue.js user interface to Next.js architecture",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Sass (SCSS)",
        "Redux.js",
        "Jira",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative scroll-mt-16 bg-white py-20 lg:py-28"
    >
      {/* Subtle background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 border border-gray-100 rounded-full"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-96 h-96 border border-gray-100 rounded-full"
          style={{ y: y2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Title className="mb-4">Professional Experience</Title>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Vertical timeline line - desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-16 lg:mb-24 last:mb-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline connector - desktop only */}
                <div className="hidden lg:block absolute left-1/2 top-16 w-4 h-0.5 bg-gray-200 -translate-x-1/2" />

                {/* Timeline dot - desktop only */}
                <div className="hidden lg:block absolute left-1/2 top-16 w-3 h-3 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white" />

                <div
                  className={`flex flex-col lg:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Company Card - Always on left for mobile, alternating for desktop */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        {exp.logo ? (
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={64}
                              height={64}
                              className="object-contain p-2"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-semibold text-white">
                              {exp.company.charAt(0)}
                            </span>
                          </div>
                        )}

                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <FiCalendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiMapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {exp.position}
                        </h4>
                        {exp.description && (
                          <p className="text-gray-600 text-sm mb-4">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Experience Details - Always on right for mobile, alternating for desktop */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
                    }`}
                  >
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 lg:p-8">
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <FiCode className="w-5 h-5" />
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-gray-700 text-sm font-medium hover:border-gray-300 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 text-sm shadow-sm">
              <FiTrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-medium">
                Currently open to new opportunities & collaborations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
