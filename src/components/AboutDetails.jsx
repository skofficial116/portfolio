import React from "react";
import { Target, Rocket, Cpu } from "lucide-react";

const AboutDetails = () => {
  const highlights = [
    {
      icon: <Target size={22} />,
      title: "Focused on Efficiency",
      desc: "I design and build systems with performance and scalability in mind, ensuring clean and modular architecture.",
    },
    {
      icon: <Rocket size={22} />,
      title: "Always Evolving",
      desc: "I believe in continuous learning and exploring new technologies to stay relevant and deliver quality solutions.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Tech-Driven Mindset",
      desc: "From APIs to deployment pipelines, I’m passionate about crafting reliable and optimized software.",
    },
  ];

  return (
    <section className="bg-[#11121A] text-gray-100 px-6 md:px-16 lg:px-24 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        A Little More <span className="text-indigo-400">About Me</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-gray-800 bg-[#0B0C10] hover:border-indigo-500/40 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4 text-indigo-400">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutDetails;
