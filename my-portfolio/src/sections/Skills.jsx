import React from "react";
import ParticleBackground from "../components/ParticlesBackground";
import { FaReact, FaNodeJs, FaDocker, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFastapi,
  SiPython,
} from "react-icons/si";

export default function SkillsMarqueeFade() {
  const Glow = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[80px]",
    "-bottom-10 -right-20 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20 blur-[100px]",
  ];

  const skills = [
    { name: "FastAPI", icon: <SiFastapi size={28} /> },
    { name: "Python", icon: <SiPython size={28} /> },
    { name: "Docker", icon: <FaDocker size={28} /> },
    { name: "Node.js", icon: <FaNodeJs size={28} /> },
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
    { name: "Angular", icon: <span className="text-2xl font-bold">A</span> },
    { name: "Java", icon: <FaJava size={28} /> },
    { name: "React", icon: <FaReact size={28} /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} /> },
    { name: "TypeScript", icon: <SiTypescript size={28} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
  ];

  return (
    <section id="skills" className="relative w-full bg-black py-20 overflow-hidden">
      <ParticleBackground />

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Glow.map((glow, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-linear-to-r from-[#6366f1] via-[#3b82f6] to-[#0ea5e9] animate-pulse ${glow}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-6">
          My Skills
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 text-center mb-10">
          Modern Applications | Modern Technologies
        </p>

        {/* Marquee Container with Fade */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {skills.concat(skills).map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-24 mx-4"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0f172a] text-cyan-400 shadow-lg">
                  {skill.icon}
                </div>
                <span className="text-gray-400 mt-2 text-center text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
