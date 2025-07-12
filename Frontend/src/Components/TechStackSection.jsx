import { motion, transform, useAnimation } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,

  SiWordpress,
  SiTypescript,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiMysql
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; // correct and available
import { useEffect } from "react";


const stacks = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
  {
    title: "Full Stack",
    items: [
      { name: "MERN Stack", icon: <SiReact /> },
      { name: "Next.js + MongoDB", icon: <SiNextdotjs /> },
      { name: "Node + PostgreSQL", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "WordPress",
    items: [
      { name: "WordPress", icon: <SiWordpress /> },
      { name: "Custom Theme Dev", icon: <SiHtml5 /> },
      { name: "Plugin Integration", icon: <SiCss3 /> },
    ],
  },
];


const TechStackSection = () => {
  return (
    <section className="bg-white py-24 px-6" id="Technologies">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Our <span className="text-purple-700">Tech Stack</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We use a modern and versatile set of tools, frameworks, and libraries across frontend, backend, full stack, and WordPress development.
        </p>
      </div>

      <div className="w-full px-8 md:px-16 space-y-10">
        {stacks.map((stack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // whileHover={{ scale: 1.05 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
              {stack.title}
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:flex md:flex-wrap md:justify-around w-full">
              {stack.items.map((item, i) => (
                <li key={i} className="flex flex-col items-center gap-3 text-gray-800">

                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    whileHover={{ rotate: 360 }}
                    transition={{

                      scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                      rotate: {
                        duration: 0.3,
                        ease: "easeInOut",
                      }
                    }}
                    className="text-3xl text-purple-500">
                    {item.icon}
                  </motion.span>
                  <span className="text-xl font-medium">{item.name}</span>

                </li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
