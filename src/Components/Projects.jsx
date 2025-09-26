import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projectLogo from "../assets/logo.png"; // 

function Projects() {
  const project = {
    title: "AI-Powered E-Commerce Website (OneCart)",
    description:
      "A next-gen e-commerce platform built with the MERN stack, integrated with AI-powered recommendations, secure payments, and an advanced admin dashboard for seamless management.",
    tech: ["React + Vite", "Firebase", "Razorpay", "MERN", "AI"],
    features: [
      "⚡ Modern E-Commerce UI & UX",
      "🔐 Google Authentication",
      "💳 Secure Razorpay Payments",
      "📊 Admin Dashboard",
      "🛒 Cart & Checkout System",
      "📦 Real-time Stock Updates",
      "🤖 AI Recommendations",
      "📱 Fully Responsive",
      "☁️ Deployed on Render",
    ],
    liveLink: "https://onecart-frontend-sybj.onrender.com/",
    githubLink: "https://github.com/abhiiparmar/OneCart",
  };

  return (
    <section
      id="projects"
      className="relative min-h-[80vh] px-6 md:px-16 py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          My Project
        </h2>
        <p className="text-gray-400 mt-1 text-base">
          A showcase of my professional work and technical expertise.
        </p>
      </div>

      {/* Project Card */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-800 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-cyan-500/30 transition duration-500">
        {/* Project Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src={projectLogo}
            alt={project.title}
            className="w-64 h-64 object-contain p-4 bg-white rounded-2xl shadow-md transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <div className="md:w-1/2 w-full flex flex-col space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {project.title}
          </h3>

          <p className="text-gray-300 text-base">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-medium shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-gray-300 text-sm">
            {project.features.map((feature, idx) => (
              <li key={idx} className="hover:text-cyan-400 transition">
                {feature}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-cyan-400/50 hover:scale-105 transform transition"
            >
              View Live <FaExternalLinkAlt />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2 border border-cyan-500 rounded-full text-cyan-400 text-sm font-semibold hover:bg-cyan-500 hover:text-white shadow-md transition"
            >
              GitHub <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
