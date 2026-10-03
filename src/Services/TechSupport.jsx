import React from "react";
import { Col, Container, Row } from "reactstrap";
import call1 from "../assets/services/techSupport.jpg";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const TechSupport = () => {
  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">TECHNICAL SUPPORT</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Services </span>/ Tech Support
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <br />
      <section>
        <Container>
          <h2>Empower Your Business with Exceptional Tech Support</h2>
          <p>
            Experience unparalleled technical support tailored to your business
            needs with our comprehensive Tech Support Services. Whether it's
            troubleshooting software glitches, resolving hardware malfunctions,
            or addressing network connectivity issues, we've got you covered.
            <br />
            <br />
            Partner with us for your tech support needs and gain access to a
            team of experts committed to delivering exceptional service and
            keeping your technology running smoothly.
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
              <p className="about-heading">TECHNICAL SUPPORT</p>
              <p>
                Our team of skilled professionals is dedicated to providing
                prompt, reliable, and efficient assistance to resolve any
                technical issues that may arise.
                <br />
                <br />
                With our proactive monitoring and maintenance approach, we
                detect and resolve potential issues before they disrupt your
                operations, ensuring maximum uptime and productivity for your
                business. From basic inquiries to complex technical challenges,
                our knowledgeable support staff is available around the clock to
                provide personalized assistance and guidance.
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

export default TechSupport;
