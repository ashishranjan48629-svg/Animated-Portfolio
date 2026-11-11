import React, { useState } from "react";
import ParticleBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";

/* -------------------------------------------------------------------------- */
/* Config                                                                     */
/* -------------------------------------------------------------------------- */

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const SENDING = "Sending...";
const SUCCESS = "Message sent successfully!";

const EMPTY_FORM = { name: "", email: "", service: "", budget: "", idea: "" };

const SERVICES = ["Web Development", "App Development", "UI/UX Design"];

const GLOWS = [
  "-top-10 -left-10 w-[360px] h-[360px] blur-[80px]",
  "-bottom-10 -right-20 w-[360px] h-[360px] blur-[120px]",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] blur-[100px]",
];

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-blue-500 outline-none text-white placeholder-gray-500 text-sm transition-colors";

/* -------------------------------------------------------------------------- */
/* Small components                                                           */
/* -------------------------------------------------------------------------- */

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

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const isSending = status === SENDING;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Budget accepts numbers only
    if (name === "budget" && value && !/^\d*\.?\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Returns true when the form is valid
  const validate = () => {
    const newErrors = {};
    Object.keys(EMPTY_FORM).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus(SENDING);

    // Keys must EXACTLY match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service: formData.service,
      budget: formData.budget,
      message: formData.idea,
      to_name: "Admin",
      reply_to: formData.email,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus(SUCCESS);
      setFormData(EMPTY_FORM);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus(`Failed: ${err?.text || err?.message || "Please try again."}`);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden px-4 sm:px-6 md:px-12 py-24"
    >
      <ParticleBackground />
      <GlowEffects />

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative z-10 w-full max-w-xl bg-black/80 border border-gray-800 rounded-2xl p-5 sm:p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold mb-2">Let's Work Together</h2>

        <Field label="Your Name" error={errors.name}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputClass}
          />
        </Field>

        <Field label="Your Email" error={errors.email}>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={inputClass}
          />
        </Field>

        <Field label="Service Needed" error={errors.service}>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Your Budget" error={errors.budget}>
          <input
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Your Budget"
            inputMode="decimal"
            className={inputClass}
          />
        </Field>

        <Field label="Explain Your Idea" error={errors.idea}>
          <textarea
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            rows={5}
            placeholder="Explain your idea..."
            className={inputClass}
          />
        </Field>

        <button
          type="submit"
          disabled={isSending}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold text-sm tracking-wide"
        >
          {isSending ? SENDING : "Send Message"}
        </button>

        {status && !isSending && (
          <p
            className={`text-center text-sm ${
              status === SUCCESS ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}