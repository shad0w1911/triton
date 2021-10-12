import React from "react";
import logo from "../../Assets/Logo/logo-817x824.png";
import "../../bootswatch/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar-dark" bg="primary" expand="lg">
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/About" className="nav-link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </Nav.Link>
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
