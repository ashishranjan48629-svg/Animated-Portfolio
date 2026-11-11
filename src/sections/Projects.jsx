import { useState } from "react";
import ParticleBackground from "../components/ParticlesBackground";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const cards = [
    {
      icon: "🤖",
      title: "Neroxa AI",
      desc: "An intelligent AI SaaS platform with powerful automation, smart workflows, and seamless integrations built for scale.",
      tags: ["React", "Node.js", "Tailwind CSS", "OpenAI"],
      demo: null,
      github: null,
      featured: true,
      category: "Full Stack",
    },
    {
      icon: "✨",
      title: "Animated Portfolio",
      desc: "A personal developer portfolio with smooth animations, starry background, dark theme, and fully responsive layout built from scratch.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demo: null,
      github: null,
      featured: true,
      category: "Frontend",
    },
    {
      icon: "💱",
      title: "Currency Exchanger",
      desc: "A real-time currency exchange app that converts between multiple currencies using live exchange rate APIs with a clean and minimal UI.",
      tags: ["HTML", "CSS", "JavaScript", "Exchange Rate API"],
      demo: "https://ashishranjan48629-svg.github.io/currency-exchanger/",
      github: "https://github.com/ashishranjan48629-svg/currency-exchanger",
      category: "Frontend",
    },
    {
      icon: "🛒",
      title: "Amazon Clone",
      desc: "A fully functional e-commerce clone of Amazon with product listings, cart functionality, and a clean responsive UI matching the real site.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://ashishranjan48629-svg.github.io/Amazon-clone/",
      github: "https://github.com/ashishranjan48629-svg/Amazon-clone",
      category: "Frontend",
    },
    {
      icon: "🛍️",
      title: "CraveCart",
      desc: "A modern e-commerce store with product browsing, cart management, and checkout flow, designed to be fast, responsive, and easy to use.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demo: null,
      github: null,
      category: "Full Stack",
    },
  ];

  const tabs = ["All", "Frontend", "Full Stack"];

  const filtered = cards.filter(
    (project) => activeTab === "All" || project.category === activeTab,
  );

  const Glow = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[80px]",
    "-bottom-10 -right-20 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20 blur-[100px]",
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full relative bg-black text-white overflow-hidden"
    >
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20">
        {/* Header */}
        <p className="mb-3 text-xs uppercase tracking-widest text-blue-400">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-500 text-sm mb-8 max-w-md">
          Things I've built while learning and growing as a developer.
        </p>

        {/* Filter Tabs */}
        <div className="flex gap-3 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-500/15 border-blue-500/50 text-blue-400"
                  : "bg-transparent border-white/10 text-gray-500 hover:border-blue-500/30 hover:text-blue-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="relative h-full flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 hover:border-blue-500/25 hover:bg-blue-500/[0.04] hover:-translate-y-1.5 transition-all duration-300"
            >
              {project.featured && (
                <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
              )}

              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-blue-500/10 border border-blue-500/20 mb-5 flex-shrink-0">
                {project.icon}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-100">
                {project.title}
              </h3>
              <p className="mb-5 flex-grow text-sm leading-relaxed text-gray-500">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-blue-500/15 bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.06] pt-5 flex-shrink-0">
                <div className="flex gap-4">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      🔗 Live Demo
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      &lt;/&gt; GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;