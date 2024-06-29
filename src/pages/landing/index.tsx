import React, { useEffect } from "react";
import AboutSection from "../../components/organisms/about-section";
import ContactSection from "../../components/organisms/contact-section";
import ImagesSection from "../../components/organisms/images-section";
import RunningText from "../../components/atoms/running-text";
import { motion } from "framer-motion";
import useLoadingStore from "../../core/store/loading.store";

const LandingPage: React.FC = () => {
  const { isLoading, setLoading } = useLoadingStore((store) => store);
  useEffect(() => {
    setLoading(true);
  }, [setLoading]);
  return (
    <motion.div>
      {isLoading && <div className="white-page"></div>}
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
