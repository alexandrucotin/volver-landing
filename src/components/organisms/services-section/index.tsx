import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface Service {
  keys: string[];
  titles: string[];
}

const services: Service[] = [
  { keys: ["01", "02"], titles: ["Graphic design", "Social media"] },
  { keys: ["03", "04"], titles: ["Art direction", "Content production"] },
  { keys: ["05", ""], titles: ["Editorial project", ""] },
];

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-section-image"></div>
      <div className="services-section-content">
        <div className="services-section-content-description">
          <Title className="services-section-content-description-title">
            A studio <span>not an agency</span>
          </Title>
          <Paragraph className="services-section-content-description-description">
            A studio, not an agency, born and raised in Milan in 2020. A
            creative space populated by young professionals committed to the
            communication cause. From the design of a website to the content
            creation for a billboard campaign, everything is game because
            translating ideas into engaging concepts is our favorite hobby.
          </Paragraph>
        </div>
        <div className="services-section-content-services-list">
          {services.map((services, index) => (
            <div
              className="services-section-content-services-list-item"
              key={index}
            >
              <div className="services-section-content-services-list-item-keys">
                {services.keys.map((key, index) => (
                  <div
                    key={index}
                    className="services-section-content-services-list-item-key"
                  >
                    {key ? key : <br></br>}
                  </div>
                ))}
              </div>
              <div className="services-section-content-services-list-item-titles">
                {services.titles.map((title, index) => (
                  <div
                    key={index}
                    className="services-section-content-services-list-item-title"
                  >
                    {title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
