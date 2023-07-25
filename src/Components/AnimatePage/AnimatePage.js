import React from "react";
import { motion } from "framer-motion";

const AnimatePage = ({ children }) => {
  const pageVar = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div variants={pageVar} initial="init" animate="animate" exit="exit" transition={{duration:1}}>
      {children}
    </motion.div>
  );
};

export default AnimatePage;
