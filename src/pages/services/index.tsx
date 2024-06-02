import React from "react";
import { motion } from "framer-motion";
import data from "../../assets/data/services.json";

const ServicesPage: React.FC = () => {
  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="services-page-list">
        {data.services.map((service, index) => (
          <div key={index} className="services-page-list-card">
            <div className="services-page-list-card-title">
              <div className="services-page-list-card-title-number">
                {index + 1}
              </div>
              {service.title}
            </div>

            <p className="services-page-list-card-description">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="services-page-image-section">
        {/* <img src={data.image} alt="" /> */}
      </div>
    </motion.div>
  );
};

export default ServicesPage;
