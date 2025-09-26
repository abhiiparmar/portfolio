import React from "react";
import { BsPersonRaisedHand } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import resumeFile from '../assets/AbhishekParmar.pdf'

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 text-white overflow-hidden
                 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <div className="relative z-10 flex flex-col items-center space-y-4 max-w-3xl">
        <div className="flex items-center space-x-3 animate-fadeInUp">
          <BsPersonRaisedHand className="text-4xl md:text-5xl animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Hello
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-400 animate-fadeInUp animation-delay-500">
          I'am Full Stack Developer
        </h2>

        <p className="text-sm md:text-xl text-gray-300 max-w-2xl animate-fadeInUp animation-delay-700">
          I aim to build a career in the IT sector. I enjoy web development and debugging, and I focus on improving my technical skills through hands-on learning. I'm persistent, detail-oriented, and committed to contributing effectively in the tech industry.        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-1000">
          <a
            href={resumeFile}
            download="AbhishekParmar.pdf"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition transform duration-300 flex items-center gap-2"
          >
            Download Resume <FaArrowRight />
          </a><br /><br />
          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animation-delay-700 { animation-delay: 0.7s; }
          .animation-delay-1000 { animation-delay: 1s; }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce { animation: bounce 1.5s infinite; }
        `}
      </style>
    </section>
  );
}

export default Home;
