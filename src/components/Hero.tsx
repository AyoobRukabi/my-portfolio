import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center 
                 bg-gray-50 dark:bg-gray-900 
                 text-gray-900 dark:text-gray-100 
                 px-6"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center"
      >
        Hi, I’m <span className="text-blue-500">Ayob</span>
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 text-center max-w-2xl"
      >
        A Full-Stack Developer building modern web applications with{" "}
        <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">TypeScript</span>, and{" "}
        <span className="font-semibold">Django</span>.
      </motion.p>

      {/* Call-to-action Button */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg 
                   hover:bg-blue-600 dark:hover:bg-blue-400 
                   transition transform hover:scale-105"
      >
        View Projects
      </motion.a>
    </section>
  );
};

export default Hero;
