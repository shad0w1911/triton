import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../css/contact.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm("service_id", "template_id", e.target, "user_id").then(
    (result) => {
      swal({
        title: "Message Sent Successfully",
        icon: "success",
      });
      console.log(result.text);
    },
    (error) => {
      swal({
        title: "Message Sending Failed",
        icon: "error",
      });
      console.log(error.text);
    }
  );
  e.target.reset();
}
export const Contact = () => (
  <Container fluid="true" className="contactBody">
    <div className="banner">
      <Container>
        <h1 className="brand text-left">COntact</h1>
      </Container>
      <br />
    </div>
    <br />
    <Container>
      <Row className="formBody">
        <div className="formHeader">
          <h1>GET IN TOUCH</h1>
        </div>
        <Col md lg>
          <form
            className="contact-form was-validated form"
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                required
              />
              <div class="valid-feedback" style={{ color: "rgb(155,132,76)" }}>
                Valid.
              </div>
              <div
                class="invalid-feedback"
                style={{ color: "rgb(155,132,76)" }}
              >
                Please enter your name.
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                required
              />
              <div class="valid-feedback" style={{ color: "rgb(155,132,76)" }}>
                Valid.
              </div>
              <div
                class="invalid-feedback"
                style={{ color: "rgb(155,132,76)" }}
              >
                Please fill out this field.
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                required
              />
              <div class="valid-feedback" style={{ color: "rgb(155,132,76)" }}>
                Valid.
              </div>
              <div
                class="invalid-feedback"
                style={{ color: "rgb(155,132,76)" }}
              >
                Please enter your email.
              </div>
            </div>
            <div className="form-group">
              <textarea
                type="textarea"
                name="message"
                placeholder="Message"
                className="form-control"
                rows="5"
                required
              />
              <div class="valid-feedback" style={{ color: "rgb(155,132,76)" }}>
                Valid.
              </div>
              <div
                class="invalid-feedback"
                style={{ color: "rgb(155,132,76)" }}
              >
                Please type your message.
              </div>
            </div>
            <Button as="input" type="submit" value="SEND" />
          </form>
        </Col>
        <Col md lg>
          <br />
          <Row>
            <Col lg="1" md="1" sm="1" xs="1">
              <i class="fas fa-map-marker-alt icon"></i>
            </Col>
            <Col lg="11" md="11" sm="11" xs="11">
              <p className="text-left contactInfo">
                Address: Al-Samad Tower, Suite# 603, Block 13 C <br />
                Gulshan-e-Iqbal, Karachi, 75300
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="1" md="1" sm="1" xs="1">
              <i class="fas fa-phone-alt icon"></i>
            </Col>
            <Col lg="11" md="11" sm="11" xs="11">
              <p className="text-left contactInfo">+021-0900-786-01</p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="1" md="1" sm="1" xs="1">
              <i class="fas fa-envelope icon"></i>
            </Col>
            <Col lg="11" md="11" sm="11" xs="11">
              <p className="text-left contactInfo">email@domain.com</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.916536049692!2d67.0816826!3d24.9072193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72218db9c789fa81!2sTriton%20Consultancy%20Pvt.%20Ltd!5e0!3m2!1sen!2s!4v1634008359658!5m2!1sen!2s"
                width="100%"
                height="280px"
                allowfullscreen=""
                loading="lazy"
                title="This is a unique title"
              ></iframe>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <br />
  </Container>
);
