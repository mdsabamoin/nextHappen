import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Features = () => {
  const features = [
    {
      title: "All-In-One Event Dashboard",
      description:
        "Manage every aspect of your event from a single, intuitive dashboard.",
    },
    {
      title: "Vendor Management",
      description:
        "Connect with and manage all your vendors in one place with our integrated system.",
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Work seamlessly with your team and stakeholders with real-time updates.",
    },
    {
      title: "Budget Estimator",
      description:
        "Plan your expenses accurately with our smart budget estimation tools.",
    },
  ];

  return (
    <section id="features" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "grey" }}>
              Why Choose NextHappen
            </h2>
            <p className="lead" style={{ color: "grey" }}>
              Powerful features to make your event planning effortless
            </p>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 border-0">
                <Card.Body className="text-center">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="h5">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
