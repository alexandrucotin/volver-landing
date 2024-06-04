import React from "react";
import data from "../../../../public/data/services.json";
import { Button, Popover } from "antd";

const ServicesSection: React.FC = () => {
  const returnContent = (content: string[]) => {
    return (
      <div className="services-section-content-services-list-item-popover">
        {content.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    );
  };
  return (
    <section className="services-section">
      <div className="services-section-content-services-list">
        {data.services.map((service, index) => (
          <div
            className="services-section-content-services-list-item"
            key={index}
          >
            <div className="services-section-content-services-list-item-keys">
              <h1 className="services-section-content-services-list-item-key">
                {service.key}
              </h1>
            </div>
            <div className="services-section-content-services-list-item-titles">
              <Popover
                content={returnContent(service.description)}
                trigger="hover"
                arrow={false}
              >
                <Button type="text">{service.title}</Button>
              </Popover>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
