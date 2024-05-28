import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Error.css";

function Error() {
  return (
    <Container fluid className="error-container">
      <Row className="error-row">
        <Col className="error-col">
          <h1 className="display-1">Error 404: Page Not Found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;
