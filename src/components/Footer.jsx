import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row className="footer-row no-gutters">
        <Col className="footer-column">
          <h2>Location</h2>
          <p>San Diego County</p>
        </Col>
        <Col className="footer-column">
          <h2>Hours</h2>
          <p className="p-tag m-0">Every Day</p>
          <p>6:30am - 11:00pm</p>
        </Col>
        <Col className="footer-column">
          <h2>Contact</h2>
          <a href="mailto:stripeprosofsd@gmail.com" className="contact-tag">
            stripeprosofsd@gmail.com
          </a>
          <br />
          <a href="tel:949-612-5850" className="contact-tag">
            (949) 612-5850
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
