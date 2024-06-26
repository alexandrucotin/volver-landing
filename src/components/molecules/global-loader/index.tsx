import React from "react";
import { motion } from "framer-motion";

const GlobalLoader: React.FC = () => {
  const loaderVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
    exit: { y: "100%" },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <div className="">
      <motion.div
        className="background"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backgroundVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={loaderVariants}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        className="global-loader"
      >
        <motion.div
          className="global-loader-shape"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <div className="global-loader-text">Loading...</div>
      </motion.div>
    </div>
  );
};

export default GlobalLoader;
