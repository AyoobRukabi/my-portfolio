import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          I’d love to connect! Feel free to reach out via email or LinkedIn.
        </motion.p>
        <a
          href="mailto:ayoob.alrukabi@gmail.com"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
