import React from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="background-container">
      <motion.div
        className="background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="gradient"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="gradient"
          animate={{
            backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="gradient"
          animate={{
            backgroundPosition: ["0% 100%", "100% 0%", "0% 100%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="gradient"
          animate={{
            backgroundPosition: ["100% 100%", "0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>
      <div className="overlay-content">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
