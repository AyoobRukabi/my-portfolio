import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDjango, SiGo } from "react-icons/si";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, TypeScript, and Tailwind CSS.",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
    ],
    link: "https://github.com/AyoobRukabi/my-portfolio",
  },
  {
    title: "E-commerce App",
    description: "Full-stack Django + React application with authentication and payments.",
    tech: [
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-800" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Python", icon: <FaPython className="text-green-400" /> }  
    ],
    link: "#",
  },
  {
    title: "Go Task Manager API",
    description:
      "RESTful API for managing tasks, built with Go (Golang), Gorilla Mux, and PostgreSQL.",
    tech: [
      { name: "Go", icon: <SiGo className="text-cyan-500" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-800" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    ],
    link: "https://github.com/AyoobRukabi/go-task-manager",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

              {/* Tech stack with icons */}
              <div className="flex flex-wrap gap-3 mb-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:hover:text-blue-400"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
