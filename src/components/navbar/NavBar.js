import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../Assets/Logo/logo-817x824.png";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/POS-ISO-Program" activeStyle>
            Services
          </NavLink>
          <NavLink to="/ContactUs" activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/LogIn">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
