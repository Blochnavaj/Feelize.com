import React from 'react';
import { motion } from 'framer-motion';

import { SiExpress, SiPostman, SiFigma, SiAdobeillustrator, SiAdobe } from 'react-icons/si';
import { FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import VSCodeIcon from './icons/VSCodeIcon';

interface TechStackProps {
  icons?: Array<{ name: string; icon: React.ReactNode }>;
  animationDuration?: number;
  animationDelay?: number;
  hoverScale?: number;
  className?: string;
}

const defaultIcons = [
  { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-[#2965F1]" /> },
  { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#68A063]" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-[#47A248]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-[#000000]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'VS Code', icon: <VSCodeIcon /> },
  { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: 'Adobe XD', icon: <SiAdobe className="text-[#FF0000]" /> },
  { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-[#FF9A00]" /> },
  { name: 'Adobe Photoshop', icon: <SiAdobe className="text-[#31A8FF]" /> }
];

const TechStack: React.FC<TechStackProps> = ({
  icons = defaultIcons,
  animationDuration = 3,
  animationDelay = 0.2,
  hoverScale = 1.1,
  className = ''
}) => {
  return (
    <div className={`flex justify-center items-center gap-8 p-8 ${className}`}>
      {icons.map((tech, index) => (
        <motion.div
          key={tech.name}
          whileHover={{
            scale: hoverScale,
            rotateX: 10,
            rotateY: 10,
            transition: { duration: 0.3 }
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: index * animationDelay }}
          className="cursor-pointer"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
              y: ['0%', '-10%', '0%']
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }}
            className="text-4xl"
          >
            {tech.icon}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
