import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Cogknit",
    period: "2024 - 2025",
    details: "Building responsive websites with React, Tailwind CSS, and SEO optimization.",
  },
  {
    role: "Web Developer Intern",
    company: "Startup",
    period: "2023 - 2024",
    details: "Worked on full-stack apps with Django and React.",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 shadow rounded-lg"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-500 dark:text-gray-400">{exp.company} — {exp.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
