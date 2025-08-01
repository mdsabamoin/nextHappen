import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./HowItWorks.css";
const HowItWorks = () => {
  const steps = [
    {
      title: "Choose Your Event Type",
      description:
        "Select from our wide range of event categories including conferences, weddings, exhibitions and more.",
    },
    {
      title: "Pick Solutions",
      description:
        "Customize your event with our venue, catering, production, and other essential services.",
    },
    {
      title: "Customize & Confirm",
      description:
        "Tailor every detail to your preferences and confirm your booking with our team.",
    },
    {
      title: "Sit Back & Relax",
      description:
        "Let our experts handle everything while you focus on what matters most.",
    },
  ];

  return (
    <section id="how-it-works" className="py-5">
      <Container>
        <div className="info-box">
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-3">How It Works</h2>
              <p className="lead">
                <span
                  style={{
                    color: "orange",
                  }}
                >
                  Simple steps
                </span>{" "}
                to create your perfect event with NextHappen. From choosing your
                event type to final execution, we handle the hassle so you can
                focus on making memories.
              </p>
            </Col>
          </Row>
        </div>

        <Row>
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <span className="fw-bold">{index + 1}</span>
                    </div>
                    <h3 className="h5 ms-3 mb-0">{step.title}</h3>
                  </div>
                  <p className="text-muted">{step.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
