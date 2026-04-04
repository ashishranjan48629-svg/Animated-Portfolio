import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
 const Glow = [
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-30 blur-[120px]",
];
  return (
    <footer
      id="footer"
      className="min-h-[40vh] w-full relative bg-black text-white overflow-hidden flex items-center justify-center"
    >
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 gap-3">
        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Ashish Ranjan
        </h1>

        {/* Underline */}
        <div className="w-20 h-[3px] bg-cyan-400 rounded-full mt-1 mb-2" />

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-7 text-2xl text-white/80 my-2">
          <a
            href="https://x.com/Ashish5028"
            className="hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/ashish-ranjan-389768322/"
            className="hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/ashishranjan48629-svg/"
            className="hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:ashishranjan48629@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Quote */}
        <p className="italic text-white/50 text-sm md:text-base mt-3 max-w-sm">
          "Success is when preparation meets opportunity."
        </p>

        {/* Copyright */}
        <p className="text-xs text-white/30 mt-2">
          © 2025 Ashish Ranjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
