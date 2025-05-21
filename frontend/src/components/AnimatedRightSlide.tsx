import React from "react";
import { motion } from "framer-motion";

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        opacity: { ease: "easeIn", duration: 0.8 },
        x: { ease: [0.51, 0.71, 0.82, 1], duration: 0.9 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
