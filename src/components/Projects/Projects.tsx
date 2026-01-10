"use client";

import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import Title from "../shared/Titile/Title";
import { motion } from "framer-motion";

interface Project {
  id: string;
  project_name: string;
  image: string;
  image_alt: string;
  description: string;
  live_link: string;
  frontend_link: string;
  backend_link: string;
  technologies?: string[];
}

const Projects = (): React.ReactElement => {
  const projects: Project[] = [
    {
      id: "dream-jobs",
      project_name: "Dream Jobs",
      image: "https://i.ibb.co.com/1MB7KFC/Screenshot-2024-09-24-194530.png",
      image_alt: "Dream Jobs home screen",
      description:
        "A full-stack job platform connecting employers and job seekers with clean architecture and scalable design.",
      live_link: "https://dream-jobs-fae96.web.app/",
      frontend_link: "https://github.com/ka-tasin/dream-jobs",
      backend_link: "https://github.com/ka-tasin/dream-jobs",
      technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB", "React"]
    },
    {
      id: "convo-ai",
      project_name: "Convo.ai",
      image: "https://i.ibb.co.com/6BFzYNg/convo-ai-screenshot.png",
      image_alt: "Convo.ai chat interface",
      description:
        "Real-time chat application with AI assistant integration and seamless user communication.",
      live_link: "https://convo-ai-demo.web.app/",
      frontend_link: "https://github.com/ka-tasin/convo.ai",
      backend_link: "https://github.com/ka-tasin/convo.ai",
      technologies: ["Socket.io", "JWT", "React", "Node.js", "OpenAI API"]
    },
    {
      id: "contest-pro",
      project_name: "Contest Pro",
      image: "https://i.ibb.co/DVYk6m9/Screenshot-2024-09-30-184652.png",
      image_alt: "Contest Pro home screen",
      description:
        "Contest creation platform with role-based access control and secure payment processing.",
      live_link: "https://contest-pro-58eec.web.app/",
      frontend_link: "https://github.com/ka-tasin/contest-pro",
      backend_link: "https://github.com/ka-tasin/contest-pro",
      technologies: ["Stripe", "JWT", "React", "Express.js", "MongoDB"]
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20 bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <Title className="mb-4">
            Featured Projects
          </Title>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing professional work with modern technologies and clean architecture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-50">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.image_alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.project_name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-500">Live</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium border border-gray-200">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.frontend_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm font-medium border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                        >
                          <FiGithub className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                      
                      <Link 
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                      >
                        Details
                        <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-40 w-80 h-80 border border-gray-100" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 border border-gray-100" />
      </div>
    </section>
  );
};

export default Projects;