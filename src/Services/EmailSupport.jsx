import React from "react";
import { Col, Container, Row } from "reactstrap";
import call1 from "../assets/services/email.jpg";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const EmailSupport = () => {
  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">EMAIL SUPPORT</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Services </span>/ Email Support
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <br />
      <section>
        <Container>
          <h2>Elevate Your Customer Service</h2>
          <p>
            In today's business landscape, effective email customer service are
            indispensable. They not only enable you to cultivate your email list
            for targeted audience engagement also facilitate seamless
            interaction with visitors.
            <br />
            <br />
            Experience the difference with Triton Consultancy's state-of-the-art
            support services and elevate your customer service standards today.
          </p>
        </Container>
      </section>
      <br />
      <section className="about-banner-wrapper services-bg">
        <Container fluid="true" className="home-services ">
          <h2>Everything You Need To Know!</h2>
        </Container>
      </section>
      <br />
      <br />
      <section>
        <Container>
          <Row className="services-row px-4">
            <Col lg="6" md="6" sm="12">
              <img
                src={call1}
                alt="calling 1"
                className="services-call-image"
              />
            </Col>
            <Col lg="6" md="6" sm="12">
              <p className="about-heading">Email Support</p>
              <p>
                At Triton Consultancy, we pride ourselves on delivering
                cutting-edge email and chat support solutions that are
                constantly refined to enhance customer satisfaction. Our
                dedicated team takes on the responsibility of managing your
                customer interactions, allowing you to concentrate on driving
                your business forward.
                <br />
                <br />
                We provide cutting-edge email support services that are
                consistently enhanced to better serve your customers. Our team
                assumes full responsibility for managing customer interactions,
                enabling you to prioritize your bottom line.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <br />
      <Differentiator />
      <br />
      <br />
      <CallToAction />
    </Container>
  );
};

export default EmailSupport;
