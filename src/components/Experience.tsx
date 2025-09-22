import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Marketing Intern",
    company: "Cogknit",
    period: "Nov 2024 - Jun 2025",
    details: `- Conducted market research and competitor analysis in the Finnish market
- Participated in planning and implementing marketing campaigns
- Created content for communication and branding`,
  },
  {
    role: "Volunteer Staff",
    company: "Messukeskus, Helsinki Expo and Convention Centre",
    period: "May 2025",
    details: `- Assisted at the 11th European Stroke Organization Conference (ESOC 2025)
- Supported operations at Lilla Strindberg Café
- Managed access control, hospitality, and guided attendees`,
  },
  {
    role: "Software Engineer",
    company: "Ministry of Electricity",
    period: "Dec 2019 - Feb 2022",
    details: `- Data visualization, processing, and analysis
- Worked with databases, web development, and web scraping`,
  },
  {
    role: "Credit Card Department Officer",
    company: "World Islamic Bank",
    period: "Sep 2020 - May 2021",
    details: `- Handled ATMs, credit cards, reporting, private banking
- Managed online payment solutions and e-payments`,
  },
  {
    role: "Sales Engineer",
    company: "Great Wall Motor Co., Ltd.",
    period: "Feb 2018 - Jan 2019",
    details: `- Developed marketing strategy and product marketing
- Managed sales, showrooms, and social media marketing`,
  },
  {
    role: "Sales Promoter",
    company: "Huawei",
    period: "May 2016 - Feb 2017",
    details: `- Promoted mobile devices and technology
- Handled sales and mobile marketing`,
  },
];

const Experience: React.FC = () => {
 return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-400">{exp.company} | {exp.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;