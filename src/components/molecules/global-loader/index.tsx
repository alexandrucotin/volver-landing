import React, { useEffect } from "react";
import { motion } from "framer-motion";

const GlobalLoader: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const loaderVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
    exit: { y: "100%" },
  };

  return (
    <div className="">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={loaderVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
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
