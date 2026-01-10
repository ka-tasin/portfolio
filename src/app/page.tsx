import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
      {/* Banner - Already full width */}
      <Banner />
      
      {/* All other sections full width */}
      <div className="w-full">
        <main className="flex flex-col gap-0">
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}