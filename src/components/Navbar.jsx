import React from 'react'
import logo from '../assets/StripeProsOfSD.png'
import { Navbar, Nav, Container, NavbarToggle } from 'react-bootstrap'

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100vh"
              height="100vh"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <NavbarToggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto p-2'>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavbarComp