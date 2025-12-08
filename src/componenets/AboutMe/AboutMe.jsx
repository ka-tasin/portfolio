"use client";
import Image from "next/image";
import Title from "../shared/Titile/Title";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AboutMe = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div id="aboutMe" className="container scroll-mt-24  mx-auto lg:mt-8">
      <Title>About Me</Title>
      <div className="flex flex-col lg:flex-row gap-x-20 gap-y-8 items-center justify-center mt-5 lg:mt-16">
        <div className="">
          <Carousel
            plugins={[plugin.current]}
            className="lg:w-full mx-auto max-w-[70%] lg:max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="gap-4 px-5">
              <Image
                className="rounded-lg"
                src={"/images/nodejs.png"}
                width={300}
                height={500}
                alt="kausar-ahmad-tasin"
              />{" "}
              <Image
                className="rounded-lg"
                src={"/images/front.png"}
                width={300}
                height={500}
                alt="kausar-ahmad-tasin"
              />
              <Image
                className="rounded-lg"
                src={"/images/back.png"}
                width={300}
                height={500}
                alt="kausar-ahmad-tasin"
              />
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
        <div className="lg:w-2/3 w-full px-4 lg:px-0">
          <p>
            <span className="block">
              I'm <span className="text-[#66ec97]">Kausar Ahmad Tasin</span>, a{" "}
              <span className="text-[#66ec97]">self-driven Software Engineer</span>{" "}
              with{" "}
              <span className="text-[#66ec97]">1.5+ years of hands-on experience</span>,
              focused on{" "}
              <span className="text-[#66ec97]">backend development</span>.
              My passion goes beyond writing code—I thrive on{" "}
              <span className="text-[#66ec97]">
                engineering scalable, efficient systems
              </span>{" "}
              that power exceptional digital experiences.
            </span>
            <br />
            <span className="block">
              I specialize in building robust applications using{" "}
              <span className="text-[#66ec97]">Node.js, TypeScript</span>, and databases like{" "}
              <span className="text-[#66ec97]">PostgreSQL and MongoDB</span>.
              With expertise in{" "}
              <span className="text-[#66ec97]">API design (REST, GraphQL, WebSockets)</span>,{" "}
              <span className="text-[#66ec97]">testing with Jest</span>, and{" "}
              <span className="text-[#66ec97]">software best practices</span>,
              I deliver maintainable, high-quality solutions that stand the test of time.
            </span>
            <br />
            I believe great applications don't just work—they{" "}
            <span className="text-[#66ec97]">scale seamlessly</span> and{" "}
            <span className="text-[#66ec97]">perform efficiently</span>.
            My approach combines{" "}
            <span className="text-[#66ec97]">clean architecture</span>,{" "}
            <span className="text-[#66ec97]">solid design patterns</span>, and{" "}
            continuous learning to build systems that evolve with business needs.
            <span className="block mt-5">
              <span className="text-[#66ec97]">
                Collaboration and problem-solving fuel my growth
              </span>
              , and I enjoy working with teams that challenge conventions and
              turn ambitious ideas into reality.
            </span>
            <br />
            If you're looking for someone who{" "}
            <span className="text-[#66ec97]">codes with precision</span>,{" "}
            <span className="text-[#66ec97]">thinks architecturally</span>, and
            delivers production-ready solutions,
            let's build something remarkable together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
