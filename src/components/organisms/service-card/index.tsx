import React from "react";
import { motion } from "framer-motion";

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
  const arrow = {
    initial: { rotateY: 0, scale: 1 },
    animate: { rotateY: 180, scale: 1 },
  };
  return (
    <motion.div
      className="service-card"
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <motion.div variants={arrow} className="service-card-inner">
        <div className="service-card-front">
          <div className="service-card-front-index">{index}</div>
          <h3>{title}</h3>
        </div>
        <div className="service-card-back">
          <p>{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
