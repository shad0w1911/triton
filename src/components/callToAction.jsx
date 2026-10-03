import React, { useRef } from "react";
import { Col, Container, FormGroup, Input, Row } from "reactstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config/emailjs";

const CallToAction = () => {
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
    <>
      <Container fluid="true" style={{ backgroundColor: "#f6f6f6" }}>
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
        <Container>
          <Row className="callToAction-wrapper">
            <Col className="callToAction-text-container">
              <p>
                Turn your ideas into a reality in no <span>time!</span>
              </p>
            </Col>
            <Col>
              <form ref={form} onSubmit={sendEmail}>
                <FormGroup>
                  <Row>
                    <Col>
                      <Input
                        type="text"
                        name="user_name"
                        placeholder="Enter Full Name"
                        required="true"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <br />
                <FormGroup>
                  <Row>
                    <Col>
                      <Input
                        type="text"
                        name="user_number"
                        placeholder="Enter Phone Number"
                        required="true"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="email"
                        name="user_email"
                        placeholder="Enter Email Address"
                        required="true"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <br />
                <FormGroup>
                  <Input
                    rows="5"
                    type="textarea"
                    name="message"
                    placeholder="Type your message"
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
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default CallToAction;
