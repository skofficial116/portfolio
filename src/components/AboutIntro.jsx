import React from "react";

const AboutIntro = () => {
  return (
    <section className="bg-[#0B0C10] text-gray-100 px-6 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          About <span className="text-indigo-400">Me</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          I’m a <span className="text-indigo-300 font-medium">third year Student of Bachelor's Computer Applications at GEU, Dehradun, Uttarakhand </span> 
          with a strong focus on backend development. I enjoy designing systems that are 
          reliable, scalable, and efficient. My goal is to turn complex problems into 
          elegant technical solutions while continuously learning new technologies.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          I primarily work with <span className="text-indigo-300">Node.js</span> and 
          <span className="text-indigo-300"> Express</span> on the backend, 
          but I also explore <span className="text-indigo-300">React</span> and 
          modern frontend workflows. I love collaborating on projects where 
          architecture and contribution matter.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl shadow-indigo-600/20">
          <img
            src="/favicon.jpg"
            alt="Your portrait"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
