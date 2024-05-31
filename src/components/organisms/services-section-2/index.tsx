import React from "react";
import ServiceCard from "../service-card";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;
const servicesData = [
  {
    title: "Brand strategy & Copywriting",
    description:
      "We help you define your brand strategy and create compelling copy that speaks to your audience.",
  },
  {
    title: "Brand identity & Graphic design",
    description:
      "We create unique brand identities and stunning graphic designs that stand out.",
  },
  {
    title: "Website/Photography/Video service",
    description:
      "We offer website design, professional photography, and video production services.",
  },
  {
    title: "Design: Interior & Landscaping",
    description:
      "We provide interior design and landscaping services to transform your spaces.",
  },
];

const Services2: React.FC = () => {
  return (
    <div className="" style={{ padding: "1.5rem" }}>
      <div className="services-section-content-description">
        <Title className="services-section-content-description-title">
          A studio <span>not an agency</span>
        </Title>
        <Paragraph className="services-section-content-description-description">
          A studio, not an agency, born and raised in Milan in 2020. A creative
          space populated by young professionals committed to the communication
          cause. From the design of a website to the content creation for a
          billboard campaign, everything is game because translating ideas into
          engaging concepts is our favorite hobby.
        </Paragraph>
      </div>
      <div className="services">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index + 1}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services2;
