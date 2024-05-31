import React from "react";

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="service-card-front-index">{index}</div>
          <h3>{title}</h3>
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
