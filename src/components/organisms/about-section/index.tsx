import React from "react";
import data from "../../../../public/data/about.json";
import ServicesSection from "../services-section";

const AboutSection: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-page-video">
        <video playsInline loop autoPlay muted controls={false}>
          <source src="./reel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="about-page-content">
        <div className="">
          {data.description.map((description, index) => (
            <div key={index} className="about-page-content-description">
              {description}
            </div>
          ))}
        </div>
        <ServicesSection />
      </div>
    </div>
  );
};

export default AboutSection;
