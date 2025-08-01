import React from "react";
import { Container, Button } from "react-bootstrap";

const CTA = () => {
  return (
    <section className="py-5 text-white">
      <Container className="text-center">
        <h2 className="display-5 fw-bold mb-4" style={{ color: "grey" }}>
          Start Planning Your Event Today
        </h2>
        <p className="lead mb-5" style={{ color: "grey" }}>
          Join thousands of event organizers who trust NextHappen for their most
          important occasions.
        </p>
        <Button variant="success" size="lg" className="px-5">
          Get Started for Free
        </Button>
      </Container>
    </section>
  );
};

export default CTA;
