import React from "react";
import AboutSection from "../../components/organisms/about-section";
import ContactSection from "../../components/organisms/contact-section";
import ImagesSection from "../../components/organisms/images-section";
import RunningText from "../../components/atoms/running-text";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    duration: 1,
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="landing-page">
        <ImagesSection />
        <AboutSection />
        <RunningText />
        <ContactSection />
      </div>
    </motion.div>
  );
};

export default LandingPage;
