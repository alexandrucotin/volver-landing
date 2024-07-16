import { Col, Row } from "antd";
import React from "react";
import LogoWhite from "../../../assets/logo_white.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Row justify="space-between">
        <Col
          xs={{ span: 18, offset: 3 }}
          sm={{ span: 14 }}
          md={{ span: 8, offset: 0 }}
          lg={{ span: 6 }}
          className="footer-logo-container"
        >
          <img src={LogoWhite} alt="" />
        </Col>
        <Col className="footer-info">
          <div className="footer-info-header">Volver Studio</div>
          <div className="footer-info-item">P.IVA 01257100956</div>
          <div className="footer-info-item">info@volver.studio</div>
        </Col>
      </Row>
      <Row gutter={24} justify="center" className="footer-info-policy">
        <Col>
          <a
            className="footer-info-policy-item"
            href="https://www.iubenda.com/privacy-policy/12663918"
            title="Privacy Policy "
          >
            Privacy Policy
          </a>
        </Col>
        <Col>
          <a
            className="footer-info-policy-item"
            href="https://www.iubenda.com/privacy-policy/12663918/cookie-policy"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
