import React from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 bg-[#0B0C10] text-gray-100"
      id="home"
    >
      <div className="flex flex-col items-start space-y-6 mt-10 md:mt-0 md:w-1/2">
        <p className="text-indigo-400 font-semibold tracking-wide uppercase">
          Full Stack Developer
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m{" "}
          <span className="text-indigo-400">Your Name</span>
          <br /> I build scalable web applications.
        </h1>

        <p className="text-gray-400 max-w-lg">
          I’m a full-stack developer specializing in building fast and reliable
          Node.js backends with clean and modern React frontends. I love solving
          problems and crafting impactful digital experiences.
        </p>

        <div className="flex space-x-4">
          <Link
            to="/projects"
            className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium transition"
          >
            View My Work <ArrowRight size={18} />
          </Link>

          <a
            href="mailto:skofficial116@gmail.com"
            className="px-5 py-3 border border-indigo-500 text-indigo-300 hover:bg-indigo-600/10 rounded-md font-medium transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/skofficial116"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <Github size={24} />
          </a>
          {/* <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <Linkedin size={24} />
          </a> */}
        </div>
      </div>

      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg hover:shadow-indigo-600/30 transition">
        <img
          src="https://skofficial116.github.io/portfolio/favicon.jpg"
          alt="Your portrait"
          className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
