import React from "react";
import { Col, Container, Row } from "reactstrap";
import call1 from "../assets/services/telephone.jpg";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const Telephone = () => {
  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">TELEPHONE ANSWERING SERVICE</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Services </span>/ Telephone
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <br />
      <section>
        <Container>
          <h2>Enhance Your Customer Experience</h2>
          <p>
            Transform the way you engage with your customers and ensure every
            call is handled with care and professionalism through our Telephone
            Answering Service.
            <br />
            <br />
            Experience the benefits of our Telephone Answering Service and
            elevate your customer experience to new heights while freeing up
            valuable time and resources to focus on growing your business.
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
              <p className="about-heading">TELEPHONE ANSWERING SERVICE</p>
              <p>
                Our dedicated team of trained professionals is ready to
                represent your business with the highest level of
                professionalism and courtesy. Whether it's answering inquiries,
                scheduling appointments, or providing personalized assistance,
                we handle each call with efficiency and precision.
                <br />
                <br />
                By outsourcing your telephone answering needs to us, you can
                rest assured that your customers will always receive prompt and
                reliable assistance, leaving a positive impression of your
                brand. Our customizable solutions allow you to tailor our
                services to meet your specific requirements, ensuring seamless
                integration with your existing operations.
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

export default Telephone;
