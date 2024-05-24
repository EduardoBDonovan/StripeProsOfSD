import React from "react";
import "../styles/Home.css";
import Asphalt from "../assets/asphalt.jpg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <section className="intro-section">
        <Container fluid className="intro-container">
          <Row className="intro-row no-gutters">
            <Col md={6} className="text-column">
              <p className="display-1">Stripe Pros of SD</p>
              <br />
              <p className="display-6">
                We're your premier choice for professional line striping
                services in sunny San Diego. Our meticulous attention to detail
                and dedication to quality ensure crisp, durable markings that
                enhance safety and make your parking lot stand out. Experience
                the difference with Stripe Pros of San Diego. Contact us today
                for a free estimate!
              </p>
            </Col>
            <Col md={6} className="image-column">
              <Image src={Asphalt} alt="asphalt" className="image-item" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="request-section">
        <Container fluid className="request-container">
          <Row className="request-row no gutters">
            <Col md={6} className="request-text-column">
              <h1 className="display-4">Request a Quote</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
