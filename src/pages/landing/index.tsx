import React from "react";
import AboutSection from "../../components/organisms/about-section";
import ContactSection from "../../components/organisms/contact-section";
import ImagesSection from "../../components/organisms/images-section";
import RunningText from "../../components/atoms/running-text";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="landing-page">
        <ImagesSection />
        <AboutSection />
        <RunningText />
        <ContactSection />
      </div>
    </>
  );
};

export default LandingPage;
