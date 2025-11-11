import React from "react";
import { GraduationCap, MapPin } from "lucide-react";

const EducationTimeline = () => {
  const education = [
    {
      year: "2021",
      title: (
        <>
          Secondary School (10th){" "}
          <span className="text-amber-200 font-medium">88.83%</span>
        </>
      ),
      institution: "ST. Francis School, Ludhiana, Punjab",
      mapLink: "https://maps.app.goo.gl/xdKCvkxtaGZYSHCt7",
      details:
        "Completed secondary education with strong focus on mathematics and science, laying the foundation for analytical problem-solving.",
    },
    {
      year: "2023",
      title: (
        <>
          Higher Secondary (12th){" "}
          <span className="text-amber-200 font-medium">85.07%</span>
        </>
      ),
      institution: "S.D.P. Senior Secondary School, Ludhiana",
      mapLink: "https://maps.app.goo.gl/FHXRNCHXo7BhJ37w9",
      details:
        "Specialized in PCM (Physics, Chemistry, Mathematics) stream and explored fundamentals and logical reasoning.",
    },
    {
      year: "2023 – Present",
      title: (
        <>
          Bachelor’s in Computer Applications{" "}
          <span className="text-amber-200 font-medium">
            8.78 CGPA 
          </span> (so far upto 4th Sem)
        </>
      ),
      institution: "Graphic Era Deemed To Be University, Dehradun",
      mapLink: "https://maps.app.goo.gl/ThH2Tx1YJzBFPj8dA",
      details:
        "Pursuing a degree in Bachelors of Computer Applications with specialization in Artificial Intelligence & Data Science.",
    },
  ];

  return (
    <section className="bg-[#11121A] text-gray-100 px-4 md:px-16 lg:px-24 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-indigo-400">Education</span> Timeline
      </h2>

      <div className="relative border-l border-gray-700 ml-4 space-y-12 max-w-3xl mx-auto">
        {education.map((edu, i) => (
          <div key={i} className="ml-6 relative">
            <div className="absolute -left-[9px] mt-2 w-3 h-3 bg-indigo-400 rounded-full"></div>

            <div className="flex items-center gap-3 text-indigo-400 mb-2">
              <GraduationCap size={20} />
              <h4 className="text-lg font-semibold">{edu.title}</h4>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <p>{edu.institution}</p>
              {edu.mapLink && (
                <>
                  <span className="text-gray-600">•</span>
                  <a
                    href={edu.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition"
                  >
                    <MapPin size={14} />
                    <span>Visit</span>
                  </a>
                </>
              )}
            </div>

            <span className="text-sm text-gray-500">{edu.year}</span>
            <p className="text-gray-400 text-sm mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
