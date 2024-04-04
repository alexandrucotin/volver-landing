import React from "react";
import volverLogo from "../../assets/logo.png";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-logo-container">
        <img src={volverLogo} alt="Volver studio logo" />
      </div>
      <div className="landing-page-content">
        <div className="landing-page-content-work-in-progress">
          Website work in progress
        </div>
        <h1 className="landing-page-content-slogan">
          Where creativity comes <br /> full circle
        </h1>
        <a
          href="mailto:info@volver.studio?subject=Richiesta-Informazioni"
          className="landing-page-content-cta"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
