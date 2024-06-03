import React from "react";
import { Form, Input, Button } from "antd";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <div className="contact-section">
      <div className="contact-section-image-banner">
        <img src="./background.jpg" alt="" />
      </div>
      <motion.div
        className="contact-section-form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <Form form={form} name="contact" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input placeholder="Your email" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={4} placeholder="Your message" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default ContactSection;
