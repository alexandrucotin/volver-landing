import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:info@example.com?subject=Contact%20Us&body=Hello";
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <Button
          type="primary"
          size="large"
          onClick={handleContactClick}
          className="contact-button"
        >
          Contact Us via Email
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
