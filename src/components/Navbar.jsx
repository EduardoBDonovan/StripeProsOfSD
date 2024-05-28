import React from "react";
import Logo from "../assets/StripeProsOfSD_nb.png";
import { Navbar, Nav, Container, NavbarToggle } from "react-bootstrap";
import "../styles/Navbar.css";

function NavbarComp() {
  return (
    <Navbar className="navbar-item" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="100vh"
            height="100vh"
            className="nav-image-item"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
