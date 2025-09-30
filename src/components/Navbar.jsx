import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function HeaderNavbar() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          OPUS GLOBALS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services" className="mx-4">Services</Nav.Link>
            <Nav.Link href="#projects" className="mx-4">Project</Nav.Link>
            <Nav.Link href="#customers" className="mx-4">Customers</Nav.Link>
            <Nav.Link href="#about" className="mx-4">About Us</Nav.Link>
            <Nav.Link href="#packages" className="me-5">Packages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#login">Login🔒</Nav.Link>
        <Button variant="primary" className="ms-3 ">
          Get Started
        </Button>

      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
