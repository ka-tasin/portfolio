"use client";

import { useState } from "react";
import Title from "../shared/Titile/Title";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

interface Skill {
  title: string;
  photo: string;
  level: number;
  category: "frontend" | "backend" | "language" | "database" | "tool";
}

const Skills = (): React.ReactElement => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const skills: Skill[] = [
    // Languages
    {
      title: "TypeScript",
      photo: "https://i.ibb.co.com/0DD8PPG/download.png",
      level: 95,
      category: "language",
    },
    {
      title: "JavaScript",
      photo: "https://i.ibb.co.com/GR7phM4/download.png",
      level: 90,
      category: "language",
    },

    // Frontend
    {
      title: "React JS",
      photo: "https://i.ibb.co.com/sKbJtYR/download.png",
      level: 92,
      category: "frontend",
    },
    {
      title: "Next JS",
      photo: "https://i.ibb.co.com/pP9jj6D/download.png",
      level: 88,
      category: "frontend",
    },
    {
      title: "Tailwind CSS",
      photo: "https://i.ibb.co.com/SnV5xtd/download.png",
      level: 95,
      category: "frontend",
    },
    {
      title: "Redux JS",
      photo: "https://i.ibb.co.com/hLNXBhN/download.png",
      level: 85,
      category: "frontend",
    },
    {
      title: "shadcn/ui",
      photo: "https://i.ibb.co.com/30S1vPp/download.png",
      level: 90,
      category: "frontend",
    },
    {
      title: "CSS 3",
      photo: "https://i.ibb.co.com/6b139pg/download.png",
      level: 92,
      category: "frontend",
    },
    {
      title: "HTML 5",
      photo: "https://i.ibb.co.com/zQDTwJH/download.png",
      level: 98,
      category: "frontend",
    },

    // Backend
    {
      title: "Node.js",
      photo: "https://i.ibb.co.com/7K1wXZt/nodejs-icon.png",
      level: 90,
      category: "backend",
    },
    {
      title: "Express JS",
      photo: "https://i.ibb.co.com/f0vKNZ0/download.png",
      level: 88,
      category: "backend",
    },
    {
      title: "Next Auth",
      photo: "https://i.ibb.co.com/Rjk7pTZ/download.jpg",
      level: 85,
      category: "backend",
    },
    {
      title: "JWT",
      photo: "https://i.ibb.co.com/xq6MFFT/download.png",
      level: 90,
      category: "backend",
    },

    // Databases
    {
      title: "PostgreSQL",
      photo: "https://i.ibb.co.com/qkTcHRz/postgresql.png",
      level: 85,
      category: "database",
    },
    {
      title: "MongoDB",
      photo: "https://i.ibb.co.com/kh1PLtf/download.jpg",
      level: 82,
      category: "database",
    },
    {
      title: "Prisma ORM",
      photo: "https://i.ibb.co.com/9ZXqYQY/prisma.png",
      level: 88,
      category: "database",
    },
    {
      title: "MySQL",
      photo: "https://i.ibb.co.com/wQmTJb4/download.png",
      level: 78,
      category: "database",
    },

    // Tools
    {
      title: "Git",
      photo: "https://i.ibb.co.com/vHmjCFt/download.png",
      level: 92,
      category: "tool",
    },
    {
      title: "VS Code",
      photo: "https://i.ibb.co.com/syfBBtg/download.jpg",
      level: 95,
      category: "tool",
    },
    {
      title: "Vercel",
      photo: "https://i.ibb.co.com/4ptZ4Hk/download.png",
      level: 90,
      category: "tool",
    },
    {
      title: "Postman",
      photo: "https://i.ibb.co.com/N7yxKkk/download.png",
      level: 90,
      category: "tool",
    },
    {
      title: "Figma",
      photo: "https://i.ibb.co.com/7QDc3qY/download.png",
      level: 75,
      category: "tool",
    },
    {
      title: "Jest",
      photo: "https://i.ibb.co.com/9ZK7WKr/jest.png",
      level: 80,
      category: "tool",
    },
    {
      title: "Firebase",
      photo: "https://i.ibb.co.com/hKQTtyL/images.png",
      level: 85,
      category: "tool",
    },
    {
      title: "Stripe",
      photo: "https://i.ibb.co.com/XLzxKxf/download.png",
      level: 82,
      category: "tool",
    },
  ];

  const categories = [
    { id: "all", label: "All Skills", count: skills.length },
    {
      id: "frontend",
      label: "Frontend",
      count: skills.filter((s) => s.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: skills.filter((s) => s.category === "backend").length,
    },
    {
      id: "language",
      label: "Languages",
      count: skills.filter((s) => s.category === "language").length,
    },
    {
      id: "database",
      label: "Databases",
      count: skills.filter((s) => s.category === "database").length,
    },
    {
      id: "tool",
      label: "Tools",
      count: skills.filter((s) => s.category === "tool").length,
    },
  ];

  // Get filtered skills based on active category
  const getFilteredSkills = () => {
    const filtered =
      activeCategory === "all"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);

    return filtered.sort((a, b) => b.level - a.level);
  };

  const filteredSkills = getFilteredSkills();
  const displaySkills = showAll ? filteredSkills : filteredSkills.slice(0, 8);
  const hasMoreSkills = filteredSkills.length > 8;

  return (
    <section id="skills" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <Title className="mb-3">Technical Skills</Title>
        </div>

        {/* Category Tabs - No rounded corners */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
              className={`flex items-center gap-2 px-5 py-3 transition-all duration-200 border ${
                activeCategory === category.id
                  ? "bg-gray-900 text-white border-gray-900"
                  : "text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              <span className="font-medium text-sm">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid - No rounded corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {displaySkills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-white border border-gray-200 p-5 hover:border-gray-300 transition-all"
            >
              {/* Logo + Title (PRIMARY FOCUS) */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center mb-3">
                  <Image
                    src={skill.photo}
                    alt={skill.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 text-sm tracking-wide">
                  {skill.title}
                </h3>
              </div>

              {/* Progress */}
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-gray-800 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Percentage (SECONDARY) */}
                <div className="text-right text-xs text-gray-500">
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More/Less Button - No rounded corners */}
        {hasMoreSkills && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 font-medium border border-gray-300 hover:border-gray-400 transition-colors duration-200"
            >
              {showAll
                ? "Show Less"
                : `Show More (${filteredSkills.length - 8}+)`}
              <FiChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
