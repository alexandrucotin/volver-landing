import React from "react";
import { Form, Input, Button } from "antd";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    window.open(`
    mailto:info@volver.studio?subject=Richiesta-Informazioni&body=${
      form.getFieldsValue().message
    }`);
  };
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
            label="Nome"
            rules={[{ required: true, message: "Campo obbligatorio" }]}
          >
            <Input placeholder="Il tuo nome" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Campo obbligatorio" },
              {
                type: "email",
                message: "Si prega di inserire un'email valida!",
              },
            ]}
          >
            <Input placeholder="La tua email" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Messaggio"
            rules={[{ required: true, message: "Campo obbligatorio" }]}
          >
            <Input.TextArea rows={4} placeholder="Il tuo messaggio" />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Invia
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default ContactSection;
