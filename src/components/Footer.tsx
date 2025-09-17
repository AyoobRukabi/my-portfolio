import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 Ayob Rukabi All rights reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/AyoobRukabi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/ayob-alrukabi-308b491a8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/_ayoob.rukabi/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
