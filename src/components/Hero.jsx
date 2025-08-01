import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="py-5 py-md-6 ">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1
              className="display-4 fw-bold mb-4"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              Make Your Next Event Unforgettable
            </h1>
            <p className="lead mb-4" style={{ color: "white" }}>
              From corporate conferences to destination weddings, NextHappen
              brings your vision to life.
            </p>
            <div className="d-flex gap-3">
              <Button variant="success" size="lg">
                Get Started
              </Button>
              <Button variant="outline-secondary" size="lg">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="/images/wedding.jpg"
              alt="Event setup"
              className="img-fluid rounded shadow"
              style={{ width: "80%", height: "80%" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
