import React from "react";
import data from "../../../../public/data/services.json";

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-section-content-services-list">
        {data.services.map((service, index) => (
          <div
            className="services-section-content-services-list-item"
            key={index}
          >
            <div className="services-section-content-services-list-item-keys">
              <div className="services-section-content-services-list-item-key">
                {service.key}
              </div>
            </div>
            <div className="services-section-content-services-list-item-titles">
              <div
                key={index}
                className="services-section-content-services-list-item-title"
              >
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
