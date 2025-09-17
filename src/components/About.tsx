import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg" // put your image in the public folder
          alt="Ayoub"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />

        {/* Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a passionate <span className="font-semibold">Full-Stack Developer</span> with a
            focus on creating modern, scalable, and user-friendly web applications.
            I love turning ideas into reality through code and design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
