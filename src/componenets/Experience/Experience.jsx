// components/Experience.tsx

import Image from "next/image";
import Title from "../shared/Titile/Title";

const Experience = () => {
  return (
    <section
      id="experience"
      className="lg:py-12 scroll-mt-16 py-8 px-4 md:px-8 lg:px-24 bg-[#0a0e17] text-white w-full mt-16"
    >
      <div className="mx-auto mb-8">
        {" "}
        <Title>Experience</Title>
      </div>

      <div className="mx-auto space-y-12">
        {/* Meta Infinity  */}
        <div className="flex flex-col lg:flex-row gap-x-24 items-center justify-center">
          <div className="hidden lg:block">
            <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#68EC96] to-[#4CAF50] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">META</span>
            </div>
          </div>
          <div className="bg-[#0f1624] p-6 md:p-8 rounded-2xl shadow-lg space-y-4 max-w-3xl">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#68EC96]">
                Full Stack Developer
              </h3>
              <p className="text-sm md:text-lg italic font-semibold text-gray-400">
                Meta Infinity
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                (Sister concern of M/S Janata Industries)
              </p>
              <p className="text-sm md:text-sm text-gray-400">
                Bogura, Bangladesh (On-site)
              </p>
              <p className="text-sm md:text-base font-medium text-[#8ffdb3] mt-2">
                Nov 2025 – Present
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                Developing full-stack applications with modern technologies
                and best practices.
              </li>
              <li>
                Working on both frontend and backend components to deliver
                comprehensive solutions.
              </li>
              <li>
                Collaborating with cross-functional teams to build scalable
                and maintainable software systems.
              </li>
            </ul>

            <p className="text-sm mt-4 text-gray-400">
              <span className="text-[#68EC96] font-medium">Technologies:</span>{" "}
              Node.js, TypeScript, PostgreSQL, React.js, Next.js
            </p>
          </div>
        </div>

        {/* Tork Inc. */}
        <div className="flex flex-col lg:flex-row gap-x-24 items-center justify-center">
          <div className="hidden lg:block">
            <Image
              src={"/images/tork-circle.png"}
              alt="kausar-at-tork"
              width={200}
              height={200}
            />
          </div>
          <div className="bg-[#0f1624] p-6 md:p-8 rounded-2xl shadow-lg space-y-4 max-w-3xl">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#68EC96]">
                Frontend Developer
              </h3>
              <p className="text-sm md:text-lg italic font-semibold text-gray-400">
                The Tork Inc.
              </p>
              <p className="text-sm md:text-sm text-gray-400">
                Chittagong, Bangladesh (On-site)
              </p>
              <p className="text-sm md:text-base font-medium text-[#8ffdb3] mt-2">
                Dec 2024 – Apr 2025
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                Developed applications using Next.js, TypeScript, and Sass (SCSS).
              </li>
              <li>
                Built LMS features including student dashboards and payment integration.
              </li>
              <li>
                Developed e-commerce features, integrating APIs for product data
                and state management using Redux.js.
              </li>
              <li>
                Resolved critical bugs and collaborated with backend teams on API
                integration and error tracking using Jira.
              </li>
              <li>
                Migrated a Vue.js user interface to a Next.js project.
              </li>
            </ul>

            <p className="text-sm mt-4 text-gray-400">
              <span className="text-[#68EC96] font-medium">Technologies:</span>{" "}
              Next.js, TypeScript, Sass (SCSS), Redux.js, Jira
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
