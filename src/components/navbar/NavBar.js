import React from "react";
import logo from "../../Assets/Logo/logo-817x824.png";
import "../../bootswatch/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar-dark" bg="primary" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <FontAwesomeIcon icon="coffee" />
              Home
            </Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" hidden>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
