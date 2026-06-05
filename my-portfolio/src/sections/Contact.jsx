import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [error, setError] = useState({});
  const [state, setState] = useState("");

  const Glow = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[80px]",
    "-bottom-10 -right-20 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20 blur-[100px]",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && value && !/^\d*\.?\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const requiredFields = ["name", "email", "service", "budget", "idea"];
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field is required.";
      }
    });
    setError(newErrors);
    return Object.keys(newErrors).length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) return;

    setState("Sending...");

    // These keys must EXACTLY match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service: formData.service,
      budget: formData.budget,
      message: formData.idea,
      to_name: "Admin", // optional, use if your template has {{to_name}}
      reply_to: formData.email,
    };

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY,
      );
      console.log("Success:", result);
      setState("Message sent successfully!");
      setFormData({ name: "", email: "", service: "", budget: "", idea: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setState(`Failed: ${err?.text || err?.message || JSON.stringify(err)}`);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-blue-500 outline-none text-white placeholder-gray-500 text-sm transition-colors";

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden px-6 md:px-20"
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

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT IMAGE */}
        <motion.img
          src={astra}
          alt="Contact"
          className="w-80 md:w-[520px] object-contain"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[52%] bg-black/80 border border-gray-800 rounded-2xl p-8 space-y-5"
        >
          <h2 className="text-2xl font-bold mb-2">Let's Work Together</h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={inputClass}
            />
            {error.name && (
              <p className="text-red-400 text-xs mt-1">{error.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={inputClass}
            />
            {error.email && (
              <p className="text-red-400 text-xs mt-1">{error.email}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            {error.service && (
              <p className="text-red-400 text-xs mt-1">{error.service}</p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Budget <span className="text-red-500">*</span>
            </label>
            <input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Your Budget"
              className={inputClass}
            />
            {error.budget && (
              <p className="text-red-400 text-xs mt-1">{error.budget}</p>
            )}
          </div>

          {/* Idea */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Explain Your Idea <span className="text-red-500">*</span>
            </label>
            <textarea
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              rows="5"
              placeholder="Explain your idea..."
              className={inputClass}
            />
            {error.idea && (
              <p className="text-red-400 text-xs mt-1">{error.idea}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={state === "Sending..."}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold text-sm tracking-wide"
          >
            {state === "Sending..." ? "Sending..." : "Send Message"}
          </button>

          {state && state !== "Sending..." && (
            <p
              className={`text-center text-sm ${state.includes("successfully") ? "text-green-400" : "text-red-400"}`}
            >
              {state}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
