import React, { useState, useEffect, useRef } from "react";
import ParticleBackground from "../components/ParticlesBackground";

const experiences = [
  {
    id: 1,
    icon: "🚁",
    tag: "WORKSHOP",
    featured: true,
    title: "Boot Camp Drone Workshop",
    organizer: "NIT Manipur",
    year: "2024",
    description:
      "Participated in an intensive drone technology boot camp covering UAV fundamentals, flight mechanics, and hands-on piloting experience. Explored real-world applications in aerial photography, surveillance, and autonomous navigation systems.",
    skills: ["UAV Systems", "Flight Mechanics", "Aerial Tech", "Navigation"],
    color: "#6ee7f7",
  },
  {
    id: 2,
    icon: "🏛️",
    tag: "PROGRAM",
    featured: false,
    title: "CBDE Program",
    organizer: "NIT Manipur",
    year: "2024",
    description:
      "Completed the Capacity Building and Development for Entrepreneurship program, focused on entrepreneurial mindset, ideation frameworks, and startup fundamentals. Gained insights into product development and market validation strategies.",
    skills: ["Entrepreneurship", "Ideation", "Product Dev", "Market Strategy"],
    color: "#a78bfa",
  },
  {
    id: 3,
    icon: "💻",
    tag: "SELF-LEARNING",
    featured: false,
    title: "Skills & Technologies",
    organizer: "Independent Learning",
    year: "2023 – Present",
    description:
      "Continuously building proficiency across modern web technologies through projects, courses, and open-source contributions. Focused on full-stack development, UI/UX design, and developer tooling.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git"],
    color: "#34d399",
  },
];

const Card = ({ exp, index }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-7 overflow-hidden cursor-default"
      style={{
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        transitionDelay: `${index * 0.1}s`,
        transform: visible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(30px)",
        opacity: visible ? 1 : 0,
        background: hovered
          ? "rgba(255,255,255,0.07)"
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${exp.color}88`
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? `0 0 30px ${exp.color}30, 0 20px 40px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Featured badge */}
      {exp.featured && (
        <div
          className="absolute top-4 right-4 text-yellow-400 text-xs font-bold tracking-wider px-3 py-1 rounded-full"
          style={{
            background: "rgba(250,204,21,0.12)",
            border: "1px solid rgba(250,204,21,0.45)",
          }}
        >
          ⭐ FEATURED
        </div>
      )}

      {/* Icon + tag + title */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{
            background: `${exp.color}18`,
            border: `1px solid ${exp.color}44`,
            transition: "transform 0.3s ease",
            transform: hovered
              ? "rotate(-6deg) scale(1.1)"
              : "rotate(0deg) scale(1)",
          }}
        >
          {exp.icon}
        </div>

        <div>
          <span
            className="inline-block text-[10px] font-bold tracking-widest px-3 py-0.5 rounded-full mb-1.5"
            style={{
              color: exp.color,
              background: `${exp.color}18`,
              border: `1px solid ${exp.color}33`,
            }}
          >
            {exp.tag}
          </span>
          <h3 className="text-lg font-bold text-slate-100 leading-snug m-0">
            {exp.title}
          </h3>
        </div>
      </div>

      {/* Organizer + year */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium" style={{ color: exp.color }}>
          {exp.organizer}
        </span>
        <span className="text-xs text-white/30">{exp.year}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-white/55 leading-relaxed mb-5">
        {exp.description}
      </p>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06/]">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs text-white/65 px-2.5 py-1 rounded-md"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 70% 20%, ${exp.color}12 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />
    </div>
  );
};

const Experiences = () => {
  const Glow = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[80px]",
    "-bottom-10 -right-20 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20 blur-[100px]",
  ];

  return (
    <section
      id="Experience"
      className="min-h-screen w-full relative bg-black text-white overflow-hidden"
    >
      <style>{`
        @keyframes twinkle {
          from { opacity: 0.1; transform: scale(0.8); }
          to   { opacity: 0.7; transform: scale(1.2); }
        }
      `}</style>

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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 pt-6"
            style={{ color: "#6ee7f7" }}
          >
            MY JOURNEY
          </p>
          <h2 className="text-5xl font-extrabold text-slate-100 leading-tight mb-4">
            Experience & <span style={{ color: "#6ee7f7" }}>Programs</span>
          </h2>
          <p className="text-base text-white/45 max-w-md leading-relaxed">
            Workshops, certifications, and self-driven learning that shaped my
            growth as a developer.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <Card key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
