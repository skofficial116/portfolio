import React from "react";
import { FaDocker } from "react-icons/fa";
import {
  Code2,
  Database,
  Boxes,
  Server,
  Globe,
  Layers,
  TerminalSquare,
  Cpu,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", level: "Strong", icon: <Code2 size={20} /> },
        { name: "Python", level: "Good", icon: <TerminalSquare size={20} /> },
        { name: "Java", level: "Basic", icon: <Cpu size={20} /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "Express.js", level: "Strong", icon: <Server size={20} /> },
        { name: "React", level: "Basic", icon: <Globe size={20} /> },
      ],
    },
    {
      category: "Databases & DevOps",
      items: [
        { name: "MongoDB", level: "Strong", icon: <Database size={20} /> },
        { name: "ConvexDB", level: "Good", icon: <Database size={20} /> },
        { name: "Docker", level: "Good", icon: <FaDocker size={20} /> },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Strong":
        return "text-green-400 border-green-400/30 bg-green-400/10";
      case "Good":
        return "text-indigo-400 border-indigo-400/30 bg-indigo-400/10";
      case "Basic":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10";
      case "Learning":
        return "text-gray-400 border-gray-400/30 bg-gray-400/10";
      default:
        return "text-gray-400 border-gray-400/30 bg-gray-400/10";
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 lg:px-24 py-16 bg-[#0B0C10] text-gray-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-indigo-400">Technical</span> Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-[#11121A] p-6 rounded-xl border border-gray-800 hover:border-indigo-500/40 transition-all"
          >
            <h3 className="text-xl font-semibold mb-6 text-indigo-300 border-b border-gray-800 pb-2">
              {group.category}
            </h3>

            <ul className="space-y-4">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-400">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
