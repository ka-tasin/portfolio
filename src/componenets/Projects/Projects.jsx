import Image from "next/image";
import React from "react";
import Title from "../shared/Titile/Title";
import { RxExternalLink } from "react-icons/rx";

const Projects = () => {
  const projects = [
    {
      project_name: "Dream Jobs",
      image: "https://i.ibb.co.com/1MB7KFC/Screenshot-2024-09-24-194530.png",
      image_alt: "Dream Jobs home screen",
      description:
        "A full-stack job platform connecting employers and job seekers, designed for scalability and clean architecture. Features TypeScript, Node.js, Express.js with layered architecture (Controller → Service → Repository), IoC, DI patterns, and Unit of Work with Prisma ORM for PostgreSQL transactions.",
      details_link:
        "https://github.com/ka-tasin/dream-jobs/blob/main/README.md",
      live_link: "https://dream-jobs-fae96.web.app/",
      frontend_link: "https://github.com/ka-tasin/dream-jobs",
      backend_link: "https://github.com/ka-tasin/dream-jobs",
    },
    {
      project_name: "Convo.ai",
      image: "https://i.ibb.co.com/6BFzYNg/convo-ai-screenshot.png",
      image_alt: "Convo.ai chat interface",
      description:
        "A real-time chat application enabling seamless communication between users and an integrated AI assistant. Features Socket.io for real-time messaging, JWT authentication, ChatGPT AI integration, and a flexible API structure built with Node.js, TypeScript, Express, and MongoDB.",
      details_link:
        "https://github.com/ka-tasin/convo.ai/blob/main/README.md",
      live_link: "https://convo-ai-demo.web.app/",
      frontend_link: "https://github.com/ka-tasin/convo.ai",
      backend_link: "https://github.com/ka-tasin/convo.ai",
    },
    {
      project_name: "Contest Pro",
      image: "https://i.ibb.co/DVYk6m9/Screenshot-2024-09-30-184652.png",
      image_alt: "Contest Pro home screen",
      description:
        "Contest creation platform where creators host and manage contests, and users participate and submit entries. Features role-based access control with JWT authentication, secure participant rating system with MongoDB validation, and Stripe payment integration for contest entry fees.",
      details_link:
        "https://github.com/ka-tasin/contest-pro/blob/main/README.md",
      live_link: "https://contest-pro-58eec.web.app/",
      frontend_link: "https://github.com/ka-tasin/contest-pro",
      backend_link: "https://github.com/ka-tasin/contest-pro",
    },
  ];

  return (
    <div
      id="projects"
      className="container mx-auto scroll-mt-16 py-12 px-6 mt-14 bg-gray-900"
    >
      <Title>My Projects</Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:mt-14 gap-8">
        {projects.map((project) => (
          <div
            key={project.project_name}
            className="border border-gray-700 bg-slate-800 shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <Image
              width={533}
              height={236}
              className="rounded-md"
              alt={project.image_alt}
              src={project.image}
            />
            <h2 className="text-3xl text-center mt-4 mb-3 font-semibold text-white">
              {project.project_name}
            </h2>
            <div className="flex-grow flex flex-col justify-between">
              <p className="text-gray-300">{project.description}</p>
              <a
                target="_blank"
                className="text-start w-full mt-2 mb-6"
                href={project.details_link}
              >
                <span className="flex items-center gap-x-1 text-green-400 text-start text-sm cursor-pointer hover:underline">
                  Details
                  <RxExternalLink />
                </span>
              </a>
            </div>
            <div className="flex justify-between items-end w-full border-t border-gray-700 pt-4">
              {/* Live Link */}{" "}
              <a target="_blank" href={project.live_link}>
                {" "}
                <button className="bg-green-500 font-medium text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                  Live
                </button>
              </a>
              <div>
                {" "}
                <p className="text-center mb-2">GitHub Links</p>
                <div className="flex space-x-4 items-center">
                  {/* Frontend Link */}
                  <a href={project.frontend_link} target="_blank">
                    {" "}
                    <button className="bg-lime-600 text-white py-2 px-4 rounded-lg hover:bg-lime-700 transition duration-300">
                      Frontend
                    </button>
                  </a>
                  {/* Backend Link */}
                  <a href={project.backend_link} target="_blank">
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300">
                      Backend
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
