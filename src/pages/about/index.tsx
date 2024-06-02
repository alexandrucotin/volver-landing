import React from "react";
import data from "../../../public/data/about.json";
import video from "../../../public/reel.mp4";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-page-video">
        <video playsInline loop autoPlay muted controls={false}>
          <source src={video} type="video/mp4" />
        </video>
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
