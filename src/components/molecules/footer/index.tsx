import { Col, Row } from "antd";
import React from "react";
import LogoWhite from "../../../assets/logo_white.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Row>
        <Col
          xs={{ span: 18, offset: 2 }}
          sm={{ span: 14, offset: 5 }}
          md={{ span: 8, offset: 4 }}
          lg={{ span: 6, offset: 6 }}
          className="footer-logo-container"
        >
          <img src={LogoWhite} alt="" />
        </Col>
        <Col xs={24} md={{ span: 7, offset: 1 }} className="footer-info">
          <div className="footer-info-header">
            Volver Studio di Violetta Scanu
          </div>
          <div className="footer-info-item">
            Via Antonio Gramsci 145, 09095, Mogoro (OR)
          </div>
          <div className="footer-info-item">P.IVA 01257100956</div>
          <Row gutter={24} className="footer-info-policy">
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
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
