import React from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";


const projects = [
  {
    title: "DevTrack – Task Manager",
    description:
      "Built a real-time, room-based chat app with React, Node.js, Socket.io & MongoDB, along with JWT based authentication.",
    tech: ["React", "Express", "MongoDB", "Node.js", "Socket.io"],
    code: "https://github.com/skofficial116/Real-Time-Chat-Room",
    demo: "https://real-time-chat-room-m3nu.vercel.app/",
  },
  {
    title: "ConvexDB based Commentary (Private codebase)",
    description:
      "Real-Time Event based simple Commentary lines fetching backend for Cricket Manager, an web based cricket game",
    tech: ["Convex",  "Typescript"],
    // code: "https://github.com/yourusername/realtime-chat",
    demo: "https://www.cricketmanager.org/club/match/37424?tab=commentary",
  },
];


const ProjectsPage = () => {
  const hasProjects = projects && projects.length > 0;

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-16 lg:px-24 py-20 bg-[#0B0C10] text-gray-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-indigo-400">Featured</span> Projects
      </h2>

      {hasProjects ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-[#11121A] border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between px-6 pt-6">
                <Code2 className="text-indigo-400" size={24} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-indigo-600/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-indigo-400 transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-indigo-400 transition"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-lg">No public projects to display right now.</p>
          <p className="text-sm mt-2 text-gray-500">
            Check back later for new additions!
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
