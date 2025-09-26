import React from "react";
import { FaCode, FaServer, FaDatabase, FaTools, FaUserTie } from "react-icons/fa";

function Skills() {
  const skills = {
    "Programming Languages": ["C", "C++", "JavaScript"],
    "Frontend Development": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "React.js"],
    "Backend Development": ["Node.js", "Express.js"],
    "Database": ["MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman"],
    "Soft Skills": ["Leadership", "Time Management"],
  };

  const icons = {
    "Programming Languages": <FaCode className="text-cyan-400 text-3xl" />,
    "Frontend Development": <FaCode className="text-pink-400 text-3xl" />,
    "Backend Development": <FaServer className="text-purple-400 text-3xl" />,
    "Database": <FaDatabase className="text-green-400 text-3xl" />,
    "Tools & Platforms": <FaTools className="text-yellow-400 text-3xl" />,
    "Soft Skills": <FaUserTie className="text-orange-400 text-3xl" />,
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          A showcase of my technical expertise and professional abilities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div
            key={idx}
            className="bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-cyan-500 hover:shadow-cyan-500/30 transition duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              {icons[category]}
              <h3 className="text-xl font-semibold text-white">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs md:text-sm font-medium text-black shadow-md hover:scale-105 transform transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
