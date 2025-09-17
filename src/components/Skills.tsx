import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiGo, SiTypescript, SiJavascript, SiDjango, SiTailwindcss } from "react-icons/si";


const skills = [
  { name: "React", icon: <FaReact size={32} className="text-blue-500" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython size={32} className="text-green-500" /> },
  { name: "Go", icon: <SiGo size={32} className="text-cyan-500" /> },
  { name: "Django", icon: <SiDjango size={32} className="text-green-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-sky-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt size={32} className="text-orange-500" /> },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 shadow rounded-lg hover:scale-105 transition transform"
            >
              {skill.icon}
              <span className="mt-2 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
