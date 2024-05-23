import React from "react";
import volverLogo from "../../assets/logo.png";
import Footer from "../../components/molecules/footer";

const WorkInProgressPage: React.FC = () => {
  return (
    <div className="work-in-progress">
      <div className="container">
        <div className="work-in-progress-logo-container">
          <img src={volverLogo} alt="Volver studio logo" />
        </div>
        <div className="work-in-progress-content">
          <div className="work-in-progress-content-work-in-progress">
            Website work in progress
          </div>
          <h1 className="work-in-progress-content-slogan">
            Where creativity comes <br /> full circle
          </h1>
          <a
            href="mailto:info@volver.studio?subject=Richiesta-Informazioni"
            className="work-in-progress-content-cta"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkInProgressPage;
