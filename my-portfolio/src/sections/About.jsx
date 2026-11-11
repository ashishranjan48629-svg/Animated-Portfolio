import React from "react";
import { motion as Motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import profile from "../assets/profile.png";


const PROFILE = {
  name: "Ashish Ranjan",
  role: "Full Stack Developer",
  intro:
    "I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans Java, React, Next.js, TypeScript, Tailwind CSS, and RESTful APIs.",
};

const STATS = [
  { label: "Experience", value: "1+ years" },
  { label: "Speciality", value: "Full Stack" },
  { label: "Focus", value: "Performance & UX" },
];

const ACTIONS = [
  { label: "View My Work", href: "#projects" },
  { label: "Get in Touch", href: "#contact" },
];

const ABOUT_PARAGRAPHS = [
  "I'm a Software Developer and Web Developer — passionate about building fast, resilient applications and sharing coding insights.",
  "I love turning ideas into scalable, user-friendly products that make an impact.",
];

const GLOWS = [
  "-top-10 -left-10 w-[360px] h-[360px] blur-[80px]",
  "-bottom-10 -right-20 w-[360px] h-[360px] blur-[120px]",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] blur-[100px]",
];

const glassCard =
  "bg-white/5 border border-white/10 backdrop-blur-md rounded-xl";

const interactiveCard = `${glassCard} shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-[1.02] transition duration-300`;

const outlineButton =
  "px-6 py-3 rounded-full text-lg font-medium text-white border-2 border-white hover:bg-white hover:text-black shadow-lg hover:scale-105 transition-all";



function GlowEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {GLOWS.map((classes) => (
        <div
          key={classes}
          className={`absolute rounded-full opacity-20 animate-pulse bg-linear-to-r from-[#6366f1] via-[#3b82f6] to-[#0ea5e9] ${classes}`}
        />
      ))}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div
      className={`${glassCard} px-4 py-3 shadow-md shadow-white/5`}
    >
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}

function ProfileImage() {
  return (
    <Motion.img
      src={profile}
      alt={`${PROFILE.name} profile`}
      className="w-70 h-70 rounded-2xl object-cover mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    />
  );
}

function ProfileContent() {
  return (
    <Motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">{PROFILE.name}</h2>
      <p className="text-gray-400 mb-4">{PROFILE.role}</p>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${interactiveCard} p-5 mb-6`}
      >
        <p className="text-gray-300 leading-relaxed">{PROFILE.intro}</p>
      </Motion.div>

      <div className="flex flex-wrap gap-4 mb-6">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="flex gap-4">
        {ACTIONS.map(({ label, href }) => (
          <a key={href} href={href} className={outlineButton}>
            {label}
          </a>
        ))}
      </div>
    </Motion.div>
  );
}

function AboutCard() {
  return (
    <div className="mt-16 max-w-3xl">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${interactiveCard} p-6`}
      >
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">About Me</h3>
        {ABOUT_PARAGRAPHS.map((text, i) => (
          <p
            key={i}
            className="text-gray-400 leading-relaxed [&:not(:last-child)]:mb-4"
          >
            {text}
          </p>
        ))}
      </Motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <ParticlesBackground />
      <GlowEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ProfileImage />
          <ProfileContent />
        </div>

        <AboutCard />
      </div>
    </section>
  );
}