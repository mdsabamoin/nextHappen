import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://nexthappen.com/images/upload/67caaf35a7eaf.png"
            alt="NextHappen"
            height="50"
            width="70"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4">
            <Nav.Link href="#features" className="text-light mx-2">
              Features
            </Nav.Link>
            <Nav.Link href="#solutions" className="text-light mx-2">
              Event Solutions
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light mx-2">
              Pricing
            </Nav.Link>
            <Nav.Link href="#about" className="text-light mx-2">
              About Us
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light mx-2">
              Contact
            </Nav.Link>
          </Nav>
          <Button id="button-style" className="px-4">
            Plan Your Event
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
