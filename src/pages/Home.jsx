import React, { useState } from "react";
import "../styles/Home.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="intro-container">
        <Row className="row no-gutters">
          <Col className="intro-text-column">
            <p className="display-1">Stripe Pros of SD</p>
            <br />
            <p className="display-6">
              Your premier choice for professional line striping services in
              sunny San Diego
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="request-container">
        <Row className="row no-gutters">
          <Col md={6} className="request-text-column">
            <p className="display-1">Why Us?</p>
          </Col>
          <Col md={6} className="request-text-column display-6">
            <p>Meticulous Attention to Detail</p>
            <br />
            <p>Quality Workmanship</p>
            <br />
            <p>Customer Satisfaction</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="experience-container">
        <Row className="row no-gutters">
          <Col className="experience-text-column">
            <p className="display-1">Experience the Difference</p>
            <Button className="experience-button" onClick={handleShow}>
              <p className="display-6 m-0">
                Contact us today for a free estimate!
              </p>
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Request a Quote</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  id="myFrame"
                  width="100%"
                  height="1125px"
                  scrolling="no"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf6RFimjhKivSalcatPaQPKhqySubPZZpyMKySQK1lvdpfCtQ/viewform?embedded=true"
                >
                  Loading…
                </iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
