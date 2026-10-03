import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "reactstrap";
import logo from "../assets/icon.png";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      color="dark"
      dark="true"
      className="position-sticky"
      style={{ background: "#242424" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Triton Consultancy" className="topbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav navbar-dark bg-dark"
          style={{ color: "#fff" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-auto">
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/services">
              Services
            </NavLink>
            <NavLink className="navlink" to="/about">
              About Us
            </NavLink>
            <NavLink className="navlink" to="/careers">
              Careers
            </NavLink>
            <NavLink className="navlink" to="/contact_us">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
