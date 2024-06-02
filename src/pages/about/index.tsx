import React from "react";
import data from "../../assets/data/about.json";
import video from "../../assets/reel.mp4";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-page-video">
        <video src={video} loop autoPlay muted />
      </div>
      <div className="about-page-content">
        {data.description.map((description, index) => (
          <div key={index} className="about-page-content-description">
            {description}
          </div>
        ))}

        {/* <div className="about-page-content-description">
          {data.description.map((description, index) => (
            <>
              <div>{description}</div>
              <br />
            </>
          ))}
        </div> */}
        {/*         <div className="about-page-services">
          {data.services.map((service, index) => (
            <div key={index} className="about-page-services-item">
              <div className="about-page-services-item-labels">
                {service.keys.map((key, index) => (
                  <div key={index}>{key}</div>
                ))}
              </div>
              <div className="about-page-services-item-description">
                {service.titles.map((title, index) => (
                  <div key={index}>{title}</div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
