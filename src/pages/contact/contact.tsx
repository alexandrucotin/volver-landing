import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;
const ContactPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <Form
        className="contact-page-form"
        form={form}
        name="contact"
        layout="vertical"
        onFinish={onFinish}
      >
        <Title>Contact Us</Title>

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
  );
};

export default ContactPage;
