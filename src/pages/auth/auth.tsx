/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { FormProps } from "antd";
import { Typography } from "antd";

const { Title, Text } = Typography;

interface AuthProps {
  onAuthenticate: (isAuthenticated: boolean) => void;
}

type FieldType = {
  password?: string;
};
const Auth: React.FC<AuthProps> = ({ onAuthenticate }) => {
  const [submittable, setSubmittable] = useState<boolean>(false);
  const [form] = Form.useForm();

  // Watch all values
  const values = Form.useWatch([], form);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (values.password === "1234") {
      localStorage.setItem("authenticated", "true");
      onAuthenticate(true);
      // Reindirizza alla pagina precedentemente richiesta
      const redirectTo = (location.state as any)?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } else {
      alert("Password incorrect");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page-content">
        <Title>Protected route</Title>
        <Text>To view the content please insert the password</Text>
      </div>
      <Form layout="horizontal" form={form} onFinish={onFinish}>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button disabled={!submittable} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
