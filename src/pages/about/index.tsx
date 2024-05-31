import React from "react";
import { Typography } from "antd";
import aboutText from "../../assets/text_about.png";

const { Paragraph } = Typography;
const servicesData = [
  {
    keys: ["1", "2"],
    titles: ["Brand strategy", "Copywriting"],
    description:
      "We help you define your brand strategy and create compelling copy that speaks to your audience.",
  },
  {
    keys: ["3", "4"],
    titles: ["Brand identity", "Graphic design"],
    description:
      "We create unique brand identities and stunning graphic designs that stand out.",
  },
  {
    keys: ["5", "6"],
    titles: ["Website", "Photography/Video service"],
    description:
      "We offer website design, professional photography, and video production services.",
  },
  {
    keys: ["7", "8"],
    titles: ["Interior", " Landscaping"],
    description:
      "We provide interior design and landscaping services to transform your spaces.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-page-main-image">
        <img src={aboutText} className="about-page-main-image-title" />
      </div>
      <Paragraph className="about-page-description">
        A studio, not an agency, born and raised in Milan in 2020. A creative
        space populated by young professionals committed to the communication
        cause. From the design of a website to the content creation for a
        billboard campaign, everything is game because translating ideas into
        engaging concepts is our favorite hobby.
      </Paragraph>
      <div className="about-page-services">
        {servicesData.map((service, index) => (
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
      </div>
    </div>
  );
};

export default AboutPage;
