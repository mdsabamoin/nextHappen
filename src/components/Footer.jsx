import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4">
      <Container>
        <Row className="mb-3">
          <Col md={4}>
            <h5>NextHappen</h5>
            <p className="text-white-50">
              Making your events effortless, memorable, and seamless — every
              time.
            </p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-white-50">
                Services
              </Nav.Link>
              <Nav.Link href="#" className="text-white-50">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <span className="text-white-50">🔗 Facebook</span>
              <span className="text-white-50">🔗 Twitter</span>
              <span className="text-white-50">🔗 Instagram</span>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="text-center">
          <Col>
            <small className="text-white-50">
              © {new Date().getFullYear()} NextHappen. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
