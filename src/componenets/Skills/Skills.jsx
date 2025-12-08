"use client";
import { useState } from "react";
import Title from "../shared/Titile/Title";
import Image from "next/image";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const expertise = [
    {
      title: "TypeScript",
      photo: "https://i.ibb.co.com/0DD8PPG/download.png",
    },
    {
      title: "JavaScript",
      photo: "https://i.ibb.co.com/GR7phM4/download.png",
    },
    {
      title: "Node.js",
      photo: "https://i.ibb.co.com/7K1wXZt/nodejs-icon.png",
    },
    {
      title: "Express JS",
      photo: "https://i.ibb.co.com/f0vKNZ0/download.png",
    },
    {
      title: "React JS",
      photo: "https://i.ibb.co.com/sKbJtYR/download.png",
    },
    {
      title: "PostgreSQL",
      photo: "https://i.ibb.co.com/qkTcHRz/postgresql.png",
    },
    {
      title: "MongoDB",
      photo: "https://i.ibb.co.com/kh1PLtf/download.jpg",
    },
    {
      title: "Prisma ORM",
      photo: "https://i.ibb.co.com/9ZXqYQY/prisma.png",
    },
    { title: "Redux JS", photo: "https://i.ibb.co.com/hLNXBhN/download.png" },
    {
      title: "Tailwind CSS",
      photo: "https://i.ibb.co.com/SnV5xtd/download.png",
    },
    {
      title: "shadcn/uis",
      photo: "https://i.ibb.co.com/30S1vPp/download.png",
    },
    {
      title: "CSS 3",
      photo: "https://i.ibb.co.com/6b139pg/download.png",
    },
    { title: "HTML 5", photo: "https://i.ibb.co.com/zQDTwJH/download.png" },
  ];
  const comfortable = [
    { title: "Next JS", photo: "https://i.ibb.co.com/pP9jj6D/download.png" },
    {
      title: "Next Auth",
      photo: "https://i.ibb.co.com/Rjk7pTZ/download.jpg",
    },
    { title: "MySQL", photo: "https://i.ibb.co.com/wQmTJb4/download.png" },
    {
      title: "Bootstrap",
      photo: "https://i.ibb.co.com/y5csfJn/download.jpg",
    },
  ];
  const familiar = [
    { title: "JQuery", photo: "https://i.ibb.co.com/P5Kq3JS/download.png" },
    { title: "Stripe", photo: "https://i.ibb.co.com/XLzxKxf/download.png" },
    {
      title: "SSL Commerze",
      photo: "https://i.ibb.co.com/ZYx4R17/download.png",
    },
  ];
  const tools = [
    {
      title: "Git",
      photo: "https://i.ibb.co.com/vHmjCFt/download.png",
    },
    {
      title: "Jest",
      photo: "https://i.ibb.co.com/9ZK7WKr/jest.png",
    },
    {
      title: "JWT",
      photo: "https://i.ibb.co.com/xq6MFFT/download.png",
    },
    {
      title: "Firebase",
      photo: "https://i.ibb.co.com/hKQTtyL/images.png",
    },
    {
      title: "Figma",
      photo: "https://i.ibb.co.com/7QDc3qY/download.png",
    },
    {
      title: "VS Code",
      photo: "https://i.ibb.co.com/syfBBtg/download.jpg",
    },
    {
      title: "Vercel",
      photo: "https://i.ibb.co.com/4ptZ4Hk/download.png",
    },
    {
      title: "Netlify",
      photo: "https://i.ibb.co.com/mq6CNMm/download.png",
    },
    {
      title: "Postman",
      photo: "https://i.ibb.co.com/N7yxKkk/download.png",
    },
    {
      title: "npm",
      photo: "https://i.ibb.co.com/JsJZpDN/download.png",
    },
    {
      title: "yarn",
      photo: "https://i.ibb.co.com/NymxBFx/download.png",
    },
  ];

  const getSkillsByTab = () => {
    switch (activeTab) {
      case "expertise":
        return expertise;
      case "comfortable":
        return comfortable;
      case "familiar":
        return familiar;
      case "tools":
        return tools;
      default:
        return [...expertise, ...comfortable, ...familiar, ...tools];
    }
  };

  return (
    <div id="skills" className="container mx-2 scroll-mt-20  md:mx-auto mt-28">
      <Title>Skills</Title>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mx-4 md:mx-0 justify-center md:space-x-4 mt-10">
        {["all", "expertise", "comfortable", "familiar", "tools"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab
                ? "bg-[#66ec97] text-black"
                : "bg-gray-100 hover:bg-[#daf8e6] text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-4 mx-4 md:mx-0 md:grid-cols-5 lg:grid-cols-8 gap-8">
        {getSkillsByTab().map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="bg-white p-2 flex flex-col justify-center items-center rounded-lg flex-grow">
              <Image
                src={skill.photo}
                alt={skill.title}
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
            <div className="">
              <p className="text-base font-semibold">{skill.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
