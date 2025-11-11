import React from "react";
import { Server, Code2, Layout, Database, Wrench } from "lucide-react";

// const services = [
//   {
//     title: "Backend Development",
//     icon: <Server size={26} />,
//     description:
//       "Building reliable, scalable, and secure REST APIs using Node.js and Express. Skilled in structuring clean architecture and optimizing performance.",
//     tools: ["Node.js", "Express", "MongoDB", "ConvexDB", "JWT"],
//   },
//   {
//     title: "Frontend Integration",
//     icon: <Layout size={26} />,
//     description:
//       "Creating clean, responsive React frontends integrated with REST APIs. Focused on smooth UI/UX and maintainable component structures.",
//     tools: ["React", "Tailwind CSS", "Vite"],
//   },
//   {
//     title: "Database Design & Management",
//     icon: <Database size={26} />,
//     description:
//       "Designing schemas, managing queries, and optimizing performance for both NoSQL and SQL systems.",
//     tools: ["MongoDB", "ConvexDB", "PostgreSQL"],
//   },
//   {
//     title: "Containerization & DevOps Basics",
//     icon: <Wrench size={26} />,
//     description:
//       "Setting up Docker environments and deploying full-stack applications efficiently for testing or production.",
//     tools: ["Docker", "GitHub Actions", "Vercel"],
//   },
//   {
//     title: "API Integration & Automation",
//     icon: <Code2 size={26} />,
//     description:
//       "Connecting third-party APIs, building custom endpoints, and automating data pipelines for real-world apps.",
//     tools: ["Axios", "Node.js", "Postman"],
//   },
// ];

// const experiences = [
//   {
//     year: "2024",
//     title: "Backend Intern – XYZ Startup",
//     details:
//       "Developed REST APIs and integrated MongoDB with Express.js; worked on user authentication and deployment pipelines.",
//   },
//   {
//     year: "2023",
//     title: "Freelance API Developer",
//     details:
//       "Built custom Node.js APIs for small projects, focusing on clean structure, database design, and documentation.",
//   },
// ];

const experiences=[]
const services=[]


const Services = () => {
  const hasServices = services && services.length > 0;
  const hasExperience = experiences && experiences.length > 0;

  return (
    <section
      id="services"
      className="min-h-screen px-6 md:px-16 lg:px-24 py-20 bg-[#0B0C10] text-gray-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-indigo-400">Services</span> & Experience
      </h2>

      {hasServices ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#11121A] p-6 rounded-xl border border-gray-800 hover:border-indigo-500/40 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4 text-indigo-400">
                {s.icon}
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-indigo-400 transition">
                  {s.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{s.description}</p>
              {s.tools && s.tools.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-md bg-indigo-600/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm italic">
                  Tools not added yet
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mb-20">
          Services are not added yet
        </p>
      )}

      {hasExperience ? (
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-indigo-300">
            My Experience
          </h3>
          <div className="relative border-l border-gray-700 ml-4 space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="ml-6">
                <div className="absolute -left-[9px] mt-2 w-3 h-3 bg-indigo-400 rounded-full"></div>
                <h4 className="text-lg font-semibold">{exp.title}</h4>
                <span className="text-sm text-gray-500">{exp.year}</span>
                <p className="text-gray-400 text-sm mt-2">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Experience not added yet</p>
      )}
    </section>
  );
};

export default Services;
