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
    location: "Helsinki, Finland",
  },
  {
    role: "Data Analyst",
    company: "Tech-Port Smart Solutions",
    period: "2022 - 2024 ",
    details: `-	Worked on a SaaS platform for managing patient records and laboratory data across multiple clinics.
-	Used Python (Pandas), Excel, and data visualization to extract insights from patient and lab data, improving accuracy and reporting speed.
-	Built interactive dashboards to visualize patient trends, test volumes, and turnaround times for management.
-	Collaborated with software engineers to integrate analytics into the SaaS product, helping clinics make faster, data-driven decisions.
-	Contributed to improving data reliability and compliance, which supported onboarding of 5 new healthcare clients.
`,
    location: "Baghdad, Iraq",
  },
  {
    role: "Software Engineer",
    company: "Ministry of Electricity",
    period: "2019 - 2022",
    details: `- Data visualization, processing, and analysis
- Worked with databases, web development, and web scraping`,
    location: "Baghdad, Iraq",
  },
  {
    role: "Credit Card Department Officer",
    company: "World Islamic Bank",
    period: "2020 - 2021",
    details: `- Handled ATMs, credit cards, reporting, private banking
- Managed online payment solutions and e-payments`,
    location: "Baghdad, Iraq",
  },
  {
    role: "Sales Engineer",
    company: "Great Wall Motor Co., Ltd.",
    period: "2018 - 2019",
    details: `- Developed marketing strategy and product marketing
- Managed sales, showrooms, and social media marketing`,
    location: "Baghdad, Iraq",
  },
  {
    role: "Sales Promoter",
    company: "Huawei",
    period: "2016 - 2017",
    details: `- Promoted mobile devices and technology
- Handled sales and mobile marketing`,
    location: "Baghdad, Iraq",
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
              <p className="text-gray-600 dark:text-gray-400">{exp.company} | {exp.period} | {exp.location}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;