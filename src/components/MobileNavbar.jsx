import React, { useState } from "react";
import { Offcanvas, Nav, Button } from "react-bootstrap";

function MobileNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3 shadow-sm d-lg-none">
        <h5 className="fw-bold m-0">OPUS GLOBALS</h5>
        <Button variant="outline-dark" onClick={handleShow}>
          ☰
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Project</Nav.Link>
            <Nav.Link href="#customers">Customers</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Button variant="primary" className="mt-3 rounded-pill">
              Get Started
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileNavbar;
