import React from "react";
import profileImg from "../assets/linkdinLogo.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-36 h-36 bg-purple-500 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src={profileImg}
          alt="Abhishek Parmar"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-500 shadow-lg object-cover"
        />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col space-y-6">
        {/* <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 tracking-wider uppercase mb-2">
          About Me
        </h3> */}

        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Abhishek Parmar
        </h2>

        <p className="text-gray-300 text-lg md:text-xl">
          I began my programming journey with C and C++ and have now mastered the MERN stack. I am passionate about building modern, responsive, and performant web applications with clean UI/UX.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
          <p><span className="font-semibold text-cyan-400">Education:</span> BCA (2nd Year)</p>
          <p><span className="font-semibold text-cyan-400">Nationality:</span> India</p>
          <p><span className="font-semibold text-cyan-400">Hobby:</span> Playing Cricket</p>
          <p><span className="font-semibold text-cyan-400">Address:</span> Indore, MP</p>
          <p><span className="font-semibold text-cyan-400">Soft Skills:</span> Leadership, Time Management</p>
          <p><span className="font-semibold text-cyan-400">Contact:</span>+91 7049731094</p>
          <p><span className="font-semibold text-cyan-400">Languages:</span> English, Hindi</p>
          <p><span className="font-semibold text-cyan-400">Email:</span> abhishekParmar4989@gmail.com</p>
        </div>

      </div>

      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(30px,-50px) scale(1.1); }
            66% { transform: translate(-20px,20px) scale(0.9); }
          }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
}

export default About;
