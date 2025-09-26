import React, { useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const myNumber = "917049731049";
    const text = `New Contact Form Submission:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${myNumber}?text=${text}`;
    window.open(url, "_blank");
    form.current.reset();
  };

  return (
    <section className="relative min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Let’s connect! Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-6 bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-cyan-500 hover:shadow-cyan-500/30 transition duration-500">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Contact Details</h3>
          <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <FaUser className="text-cyan-400" /> Abhishek Parmar
          </p>
          <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <FaPhone className="text-green-400" /> +91 7049731049
          </p>
          <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <FaEnvelope className="text-yellow-400" /> abhishekParmar4989@gmail.com
          </p>
          <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <FaMapMarkerAlt className="text-red-400" /> Indore, Madhya Pradesh, India
          </p>

          <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <FaLinkedin className="text-blue-500" />
            <a href="https://www.linkedin.com/in/abhishek-parmar-3b7742329/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </p>
          <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <FaGithub className="text-white" />
            <a href="https://github.com/abhiiparmar" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendWhatsApp}
          className="space-y-6 bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-purple-500 hover:shadow-purple-500/30 transition duration-500"
        >
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Send a Message</h3>

          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transform transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
