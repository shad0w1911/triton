import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import facebook from "../assets/social/facebook.png";
import linkedin from "../assets/social/linkedin.png";
import whatsapp from "../assets/social/whatsapp.png";
import logo from "../assets/1542x1220.png";

const Footer = () => {
  return (
    <Container fluid="true" className="footer">
      <Container className="holder">
        <Row>
          <Col lg md>
            <div>
              <img
                src={logo}
                alt="V Tech Logo"
                className="img-fluid footer-logo"
              />
            </div>
          </Col>
          <Col lg md>
            <div>
              <h6>FOLLOW US</h6>
              <div className="line"></div>
              <div className="socials">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/tritonconsultancy"
                  target="_blank"
                >
                  <img className="socialIcon" src={facebook} alt="Facebook" />
                </a>
                <a
                  rel="noreferrer"
                  href="https://pk.linkedin.com/company/tritonconsultancy"
                  target="_blank"
                >
                  <img
                    className="socialIcon m-1"
                    src={linkedin}
                    alt="linkedIn"
                  />
                </a>
                <a
                  rel="noreferrer"
                  href=" https://wa.me/923183799359"
                  target="_blank"
                >
                  <img className="socialIcon" src={whatsapp} alt="WhatsApp" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg>
            <div>
              <h6>GET IN TOUCH</h6>
              <div className="line"></div>
            </div>

            <div className="footer-details">
              <p>
                <span>Phone Number:</span> +92-318-3799359
              </p>
              <p>
                <span>WhatsApp:</span> +92-318-3799359
              </p>
              <p>
                <span>Address:</span> Suite 301, 302 and 305, 4th Floor
                <br /> Suite 603, 7th Floor, Al Samad Tower, Gulshan-e-Iqbal,
                Karachi, Pakistan.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <div className="secondary-footer">
          <Row className="content">
            <Col>
              <p>
                COPYRIGHT © 2020 - {new Date().getFullYear()}{" "}
                <span className="primary">TRITONCONSULTANCYⓇ</span>
              </p>{" "}
              {/* <p style={{ display: "none" }}>
                Designed and Developed by{" "}
                <a href="www.instagram.com/hassaan_uddin_sheikh">
                  Hassan Uddin Sheikh
                </a>
              </p> */}
            </Col>
            <Col lg md>
              <ul className="secondary-nav">
                <li className="nav-item">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about"}>About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/contact_us"}>Contact Us</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
