import React from "react";
import { Col, Container, Row } from "reactstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Container fluid="true" className="topbar">
      <Container lg="6" md="12" xs="12">
        <Row>
          <Col className="info-topbar">
            <div className="my-auto">
              <p>
                <LocationOnIcon className="icon-topbar" /> Karachi, Pakistan
              </p>
            </div>
            <div className="my-auto">
              <p>
                <EmailOutlinedIcon className="icon-topbar" />{" "}
                info@tritonconsultancy.com
              </p>
            </div>
            <div className="my-auto">
              <p>
                <LocalPhoneIcon className="icon-topbar" /> +92-318-3799359
              </p>
            </div>
          </Col>
          <Col>
            <div className="links-topbar">
              <div id="facebook">
                <a
                  className="topbar-a"
                  rel="noreferrer"
                  href="https://www.facebook.com/tritonconsultancy"
                  target="_blank"
                >
                  <FacebookIcon className="social-topbar" />
                </a>
              </div>
              <div id="linkedIn">
                <a
                  className="topbar-a"
                  rel="noreferrer"
                  href="https://pk.linkedin.com/company/tritonconsultancy"
                  target="_blank"
                >
                  <LinkedInIcon className="social-topbar" />
                </a>
              </div>
              <div id="whatsapp">
                <a
                  className="topbar-a"
                  rel="noreferrer"
                  href=" https://wa.me/923183799359"
                  target="_blank"
                >
                  <WhatsAppIcon className="social-topbar" />
                </a>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/contact_us");
                  }}
                  id="topbar-btn"
                >
                  Get A Quote
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default TopBar;
