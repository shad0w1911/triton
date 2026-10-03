import React from "react";
import { Col, Container, Row } from "reactstrap";
import call1 from "../assets/services/it.jpg";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const ITService = () => {
  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">OUTSOURCED IT SERVICE</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Services </span>/ IT Service
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <br />
      <section>
        <Container>
          <h2>Optimize Your IT Infrastructure</h2>
          <p>
            Our team of experienced professionals specializes in providing
            tailored IT solutions to meet your unique needs and challenges.
            Whether it's managing your network, securing your data, or ensuring
            the smooth functioning of your systems, we've got you covered.
            <br />
            <br />
            Stay ahead of the curve with our Outsourced IT Services and let us
            handle the technical side of your business while you focus on
            driving growth and innovation.
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
              <p className="about-heading">OUTSOURCED IT SERVICE</p>
              <p>
                By outsourcing your IT needs to us, you gain access to the
                latest technologies and expertise without the hassle of
                maintaining an in-house IT department. From proactive monitoring
                and support to strategic IT consulting, we offer a full suite of
                services designed to streamline your IT operations and enhance
                your overall productivity.
                <br />
                <br />
                With our proactive approach to IT management, we identify and
                address potential issues before they escalate, minimizing
                downtime and ensuring uninterrupted operations. From cloud
                computing and cybersecurity to help desk support and IT project
                management, we offer a comprehensive range of services tailored
                to your specific requirements.
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

export default ITService;
