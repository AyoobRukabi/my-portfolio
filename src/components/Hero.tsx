import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen text-gray-900 dark:text-gray-100"
      style={{
        backgroundImage: `url('/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center"
        >
           <span className="text-blue-500">Hi, I’m Ayob</span>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-100 dark:text-gray-200 mb-6 text-center max-w-2xl"
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
      </div>
    </section>
  );
};

export default Hero;
