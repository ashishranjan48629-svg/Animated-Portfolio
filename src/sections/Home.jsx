import { useEffect, useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import avator from "../assets/avator.png";


const Socials = [
  { icon: FaXTwitter, label: "X", link: "https://x.com/Ashish5028" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ashish-ranjan-389768322/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    link: "https://github.com/ashishranjan48629-svg/",
  },
];

const GlowVariant = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.9,
    y: 0,
    transition: { duration: 0.08 },
  },
};

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Software Developer"]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((prev) => prev + 1);
        } else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />

      <div className="absolute inset-0">
        {/* Top Left Glow */}
        <div
          className="
            absolute -top-60 -left-60
            w-/[80vw] sm:w-[50vw] md:w-[40vw]
            h-[80vw] sm:h-[50vw] md:h-[40vw]
            max-w-/[800px] max-h-/[800px]
            rounded-full
            bg-linear-to-r from-[#1e3a8a] via-[#3b82f6] to-[#8b5cf6]
            opacity-20
            blur-[160px]
            animate-pulse
          "
        ></div>

        {/* Bottom Right Glow */}
        <div
          className="
            absolute -bottom-60 -right-60
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-/[600px] max-h-/[600px]
            rounded-full
            bg-linear-to-r from-[#6366f1] via-[#3b82f6] to-[#0ea5e9]
            opacity-15
            blur-[150px]
            animate-pulse
            delay-700
          "
        ></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx:auto max-w-/[48rem]">
            <motion.div
              className="mb-3 text-xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-/[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "2rem" }}
              ></span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text 
                bg-linear-to-r from-[#1cd8d2] via-[#3b82f6] to-[#ec4899] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm
              <br />
              <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:whitespace-nowrap">
                Ashish Ranjan
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Passionate Developer. Building clean and scalable web
              applications. Turning ideas into reality through code
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white
              bg-linear-to-r from-[#1cd8d2] via-[#3b82f6]  to-[#ec4899] 
              shadow-lg  hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="path/to/your/resume.pdf"
                download
                className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                My Resume
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {Socials.map(({ icon, label, link }) => {
                const Icon = icon;
                return (
                  <motion.a
                    href={link}
                    key={label}
                    target="_blank"
                    aria-label={label}
                    rel="noopener noreferrer"
                    variants={GlowVariant}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-300"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
          className="absolute top-1/2-translate-y-1/2 pointer-events-none"
          style={{
            right: "10px",
            width: "min(22vw,410px)",
            height: "min(40vw,760px)",borderRadius: "50%",
            filter: "blur(38px)",opacity:0.32,
            background : "conic-gradient(from 180deg at 50% 50%, #1e3a8a, #3b82f6, #8b5cf6, #6366f1, #3b82f6, #0ea5e9)"

          }}
          
          />
          <motion.img
            src={avator}
            alt="Ashish Ranjan"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "-30px",
              width: "min(45vw,780px)",
              maxHeight: "90vh",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
