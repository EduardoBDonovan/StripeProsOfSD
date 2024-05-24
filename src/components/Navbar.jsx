import React from "react";
import Logo from "../assets/StripeProsOfSD_nb.png";
import { Navbar, Nav, Container, NavbarToggle } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar className="navbar-item" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="100vh"
            height="100vh"
            className="nav-image-item"
          />
        </Navbar.Brand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="nav-contact-item" href="/contact">
              <strong className="squada-one-regular">Contact</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
