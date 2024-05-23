import React, { useRef } from "react";
import data from "../../assets/data/images.json";
import Services from "../../components/organisms/services-section";
import MainLogo from "../../components/molecules/main-logo";
import ImagesContainer from "../../components/organisms/images-section";

const LandingPage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <div className="new-landing-page">
      <div className="new-landing-page-content">
        <ImagesContainer images={data.imgs} />
        <MainLogo targetRef={targetRef} />
      </div>
      <div className="" ref={targetRef}>
        <Services />
      </div>
    </div>
  );
};

export default LandingPage;
