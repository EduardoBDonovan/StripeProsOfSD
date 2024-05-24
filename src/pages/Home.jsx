import React from "react";
import "./Home.css";
import Asphalt from "../assets/asphalt.jpg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Home() {
  return (
    <section className="intro-section">
      <Container fluid>
        <Row className="intro-row">
          <Col md={6} className="text-column">
            <Container className="text-item">
              <h1>Stripe Pros of SD</h1>
              <br />
              <h4>
                We're your premier choice for professional line striping
                services in sunny San Diego. Our meticulous attention to detail
                and dedication to quality ensure crisp, durable markings that
                enhance safety and make your parking lot stand out. Experience
                the difference with Stripe Pros of San Diego. Contact us today
                for a free estimate!
              </h4>
            </Container>
          </Col>
          <Col md={6} className="image-column">
            <Image src={Asphalt} alt="asphalt" className="image-item" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
