import React from "react";
import { motion } from "framer-motion";


const education = [
    {
      degree: "Software Development",
      school: "Kood/Sisu, Finland, Kuopio",
      schoolUrl: "https://koodsisu.fi/", // official school website
      period: "2025 - 2027"
    },
    
    {
      degree: "International Business",
      school: "Helsinki Business College, Finland, Helsinki",
      schoolUrl: "https://bc.fi",
      period: "2024 - 2025"
    },
    {
        degree: "B.Sc. in Software Engineering",
        school: "Al-Mansour University, Iraq, Baghdad",
        schoolUrl: "https://muc.edu.iq/en/",
        period: "2010 - 2014"
        
    },
    
  ];

  const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
          
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400"> <a
                  href={edu.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                {edu.school} </a>
                </p>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;