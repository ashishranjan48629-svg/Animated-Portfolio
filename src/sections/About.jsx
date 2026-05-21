import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import profile from "../assets/profile.png";

export default function About() {
  const Glow = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[80px]",
    "-bottom-10 -right-20 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <ParticlesBackground />

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
        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.img
            src={profile}
            alt="profile"
            className="w-70 h-70 rounded-2xl object-cover mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">
              Ashish Ranjan
            </h2>

            <p className="text-gray-400 mb-4">Full Stack Developer</p>

            {/* Paragraph Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 mb-6 
                         shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 
                         hover:-translate-y-1 hover:scale-[1.02] transition duration-300"
            >
              <p className="text-gray-300 leading-relaxed">
                I build scalable, modern applications with a strong focus on
                clean architecture, delightful UX, and performance. My toolkit
                spans Java, React, Next.js, TypeScript, Tailwind CSS, and
                RESTful APIs.
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md shadow-md shadow-white/5">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="font-bold">1+ years</p>
              </div>

              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md shadow-md shadow-white/5">
                <p className="text-sm text-gray-400">Speciality</p>
                <p className="font-bold">Full Stack</p>
              </div>

              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md shadow-md shadow-white/5">
                <p className="text-sm text-gray-400">Focus</p>
                <p className="font-bold">Performance & UX</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-lg font-medium text-white border-2 border-white hover:bg-white hover:text-black shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-lg font-medium text-white border-2 border-white hover:bg-white hover:text-black shadow-lg hover:scale-105 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* About Me Card */}
        <div className="mt-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 
                       shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 
                       hover:-translate-y-1 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">About Me</h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm a Software Developer and Web Developer — passionate about
              building fast, resilient applications and sharing coding insights.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I love turning ideas into scalable, user-friendly products that
              make an impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
