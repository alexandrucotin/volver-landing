import React, { useRef } from "react";
/* import data from "../../assets/data/images.json"; */
import Services from "../../components/organisms/services-section";
/* import ImagesContainer from "../../components/organisms/images-section"; */

const LandingPage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <div className="landing-page">
      <div className="landing-page-images-container">
        {/* <ImagesContainer images={data.imgs} /> */}
      </div>
      {/* <MainLogo targetRef={targetRef} /> */}
      <div className="" ref={targetRef}>
        <Services />
      </div>
    </div>
  );
};

export default LandingPage;
