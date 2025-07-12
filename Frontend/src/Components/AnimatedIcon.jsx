import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedIcon = ({ icon }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      rotate: 0,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.span
      animate={controls}
      onHoverStart={async () => {
        controls.stop(); // ✅ Stop breathing
        controls.start({
          rotate: 45,
          scale: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
      }}
      onHoverEnd={async () => {
        controls.stop(); // ✅ Stop rotation
        controls.start({
          rotate: 0,
          scale: [1, 1.1, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        });
      }}
      className="text-3xl text-purple-500 cursor-pointer"
    >
      {icon}
    </motion.span>
  );
};

export default AnimatedIcon;
