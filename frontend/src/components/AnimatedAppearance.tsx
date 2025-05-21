import React from "react";
import { motion } from "framer-motion";
import { type AnimatedPageProps } from "../types/AnimatedPageProps";

const AnimatedAppearance: React.FC<AnimatedPageProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        opacity: { ease: [0.51, 0.71, 0.82, 1], duration: 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedAppearance;
