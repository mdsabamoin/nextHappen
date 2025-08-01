import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "It blows my mind. I was struggling with event planning my whole life, but NextHappen changed everything. Made a corporate gala that impressed everyone, in half the time.",
      author: "Felix Leber",
      handle: "@felixleber",
    },
    {
      quote:
        "I just have to say, NextHappen's platform is absolutely mind-blowing. So many tasks become automated and streamlined with their system.",
      author: "Nanbing",
      handle: "@lronben",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "grey" }}>
              What Our Customers Say
            </h2>
            <p className="lead" style={{ color: "grey" }}>
              Our customer's words, not ours.{" "}
              <span style={{ color: "orange" }}>Skeptical?</span> Try it out,
              and see for yourself.
            </p>
          </Col>
        </Row>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <blockquote className="mb-4">
                    <p className="fst-italic text-muted">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <div>
                    <p className="fw-bold mb-0">{testimonial.author}</p>
                    <p className="text-muted small">{testimonial.handle}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
