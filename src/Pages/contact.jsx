import React, { useRef } from "react";
import { Col, Container, Input, Row } from "reactstrap";
import pk from "../assets/pk.svg";
import { FormGroup, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Partners from "../components/partners";
import transition from "../components/transitions";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config/emailjs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Bounce",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Sending Failed!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Bounce",
          });
        }
      );
  };

  return (
    <Container fluid="true">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.935973913784!2d67.0815559!3d24.9070536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f141029f60f%3A0x517c35082f47a0dd!2sMalik%20Talha%20Awan%2C%20Al%20Samad%20Tower!5e0!3m2!1sen!2s!4v1693049389573!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: "0px" }}
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
      />
      <div className="container contact-wrapper">
        <Row gap={2} className="shadow">
          <Col md={8}>
            <div>
              <br />
              <h4>Contact Us</h4>
              <div className="line2"></div>
              <br />
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <FormGroup>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Enter Full Name"
                  required="true"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="text"
                  name="user_phone"
                  placeholder="Enter Phone Number"
                  required="true"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Enter Email Address"
                  required="true"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="textarea"
                  name="message"
                  placeholder="Type your message"
                  rows="5"
                  required="true"
                />
              </FormGroup>
              <br />
              <div>
                <button className="contact-btn" type="submit">
                  SEND
                </button>
              </div>
            </form>
          </Col>
          <Col md={4} className="info">
            <div className="info-wrapper">
              <h4>Information</h4>
              <div className="line2"></div>
              <br />
              <div>
                <img src={pk} alt="flag" width={50} />
              </div>
              <br />
              <div>
                <Grid container>
                  <Grid item>
                    <LocationOnIcon sx={{ color: "white" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Address:</span> Suite
                      301, 302 and 305, 4th Floor
                      <br /> Suite 603, 7th Floor, Al Samad Tower,
                      Gulshan-e-Iqbal, Karachi, Pakistan.
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <EmailOutlinedIcon sx={{ color: "white" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                      info@tritonconsultancy.com
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <LocalPhoneIcon sx={{ color: "white" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Phone Number:</span>{" "}
                      +92-318-3799359
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <PhoneAndroidIcon sx={{ color: "white" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>WhatsApp:</span>{" "}
                      +92-318-3799359
                    </p>
                  </Grid>
                </Grid>
              </div>
              <br />
              <h4>Working Hours</h4>
              <div className="line2"></div>
              <br />
              <Grid container>
                <Grid item>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Monday - Friday:{" "}
                    </span>
                    24hrs
                  </p>
                </Grid>
                <br />
                <Grid item>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Saturday - Sunday:{" "}
                    </span>
                    Closed
                  </p>
                </Grid>
              </Grid>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <Container fluid="true">
        <Partners />
      </Container>
      <br />
      <br />
    </Container>
  );
};

export default transition(Contact);
