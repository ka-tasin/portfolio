import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

interface ProjectDetails {
  id: string;
  project_name: string;
  image: string;
  image_alt: string;
  description: string;
  full_description: string;
  technologies: string[];
  features: string[];
  live_link: string;
  frontend_link: string;
  backend_link: string;
  github_link: string;
}

const projectsData: Record<string, ProjectDetails> = {
  "dream-jobs": {
    id: "dream-jobs",
    project_name: "Dream Jobs",
    image: "https://i.ibb.co.com/1MB7KFC/Screenshot-2024-09-24-194530.png",
    image_alt: "Dream Jobs home screen",
    description:
      "A full-stack job platform connecting employers and job seekers, designed for scalability and clean architecture.",
    full_description:
      "Dream Jobs is a comprehensive full-stack job platform designed to connect employers with qualified job seekers efficiently. Built with a focus on scalability and clean architecture, this platform demonstrates enterprise-level design patterns and modern technologies.\n\nThe application implements a layered architecture with clear separation of concerns, utilizing the Controller → Service → Repository pattern. It leverages advanced patterns like Inversion of Control (IoC) and Dependency Injection (DI) for maintainable code. The backend uses Prisma ORM for database transactions with PostgreSQL, ensuring data integrity and performance.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    features: [
      "User authentication and role-based access control",
      "Job listing and search functionality",
      "Resume upload and management",
      "Application tracking system",
      "Employer dashboard with analytics",
      "Real-time job notifications",
      "Profile matching algorithm",
      "Responsive design for all devices",
    ],
    live_link: "https://dream-jobs-fae96.web.app/",
    frontend_link: "https://github.com/ka-tasin/dream-jobs",
    backend_link: "https://github.com/ka-tasin/dream-jobs",
    github_link: "https://github.com/ka-tasin/dream-jobs",
  },
  "convo-ai": {
    id: "convo-ai",
    project_name: "Convo.ai",
    image: "https://i.ibb.co.com/6BFzYNg/convo-ai-screenshot.png",
    image_alt: "Convo.ai chat interface",
    description:
      "A real-time chat application enabling seamless communication between users and an integrated AI assistant.",
    full_description:
      "Convo.ai is an innovative real-time chat platform that brings together users and an intelligent AI assistant in a seamless communication experience. The application leverages modern web technologies to provide instant messaging capabilities with integrated AI-powered responses.\n\nBuilt with Socket.io for real-time bidirectional communication, the platform ensures messages are delivered instantly. Security is paramount with JWT authentication protecting user data, while ChatGPT integration provides intelligent responses. The flexible API structure built on Node.js, TypeScript, Express, and MongoDB ensures scalability and maintainability.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "JWT",
      "ChatGPT API",
      "React",
      "WebSocket",
    ],
    features: [
      "Real-time messaging with Socket.io",
      "AI-powered responses integration",
      "User authentication with JWT",
      "Chat history and persistence",
      "User online/offline status",
      "Message timestamps and read receipts",
      "Responsive chat interface",
      "Typing indicators",
    ],
    live_link: "https://convo-ai-demo.web.app/",
    frontend_link: "https://github.com/ka-tasin/convo.ai",
    backend_link: "https://github.com/ka-tasin/convo.ai",
    github_link: "https://github.com/ka-tasin/convo.ai",
  },
  "contest-pro": {
    id: "contest-pro",
    project_name: "Contest Pro",
    image: "https://i.ibb.co/DVYk6m9/Screenshot-2024-09-30-184652.png",
    image_alt: "Contest Pro home screen",
    description:
      "Contest creation platform where creators host and manage contests, and users participate and submit entries.",
    full_description:
      "Contest Pro is a comprehensive platform that empowers creators to host, manage, and run contests seamlessly while providing users with opportunities to participate and showcase their talents. The platform implements sophisticated features for fair competition and secure transactions.\n\nWith role-based access control powered by JWT authentication, the platform ensures secure access for different user types. The participant rating system utilizes MongoDB validation for data integrity. Integration with Stripe provides secure payment processing for contest entry fees, while the platform maintains comprehensive audit trails for all transactions.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe API",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    features: [
      "Contest creation and management",
      "Role-based access control (creator/participant)",
      "Entry submission system",
      "Voting and judging mechanisms",
      "Secure payment processing with Stripe",
      "Participant rating and reviews",
      "Contest analytics and reporting",
      "Prize distribution management",
    ],
    live_link: "https://contest-pro-58eec.web.app/",
    frontend_link: "https://github.com/ka-tasin/contest-pro",
    backend_link: "https://github.com/ka-tasin/contest-pro",
    github_link: "https://github.com/ka-tasin/contest-pro",
  },
};

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailsPage({
  params,
}: ProjectPageProps): React.ReactElement {
  const project = projectsData[params.id];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ChevronLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {project.project_name}
          </h1>
          <div className="w-full bg-gray-100 border border-gray-300 overflow-hidden">
            <Image
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              alt={project.image_alt}
              src={project.image}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About This Project
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.full_description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies */}
            <div className="bg-gray-50 border border-gray-300 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-900 text-white px-3 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 border border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-900 text-white font-medium py-2 px-4 text-center hover:bg-gray-800 transition-colors border border-gray-900"
                >
                  View Live Demo
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-gray-900 font-medium py-2 px-4 text-center hover:bg-gray-50 transition-colors border border-gray-900"
                >
                  View on GitHub
                </a>
                <a
                  href={project.frontend_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-gray-900 font-medium py-2 px-4 text-center hover:bg-gray-50 transition-colors border border-gray-300"
                >
                  Frontend Code
                </a>
                <a
                  href={project.backend_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-gray-900 font-medium py-2 px-4 text-center hover:bg-gray-50 transition-colors border border-gray-300"
                >
                  Backend Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
