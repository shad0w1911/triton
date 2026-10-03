import React from "react";
import { Col, Container, Row } from "reactstrap";
import call1 from "../assets/services/portal.jpg";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const Portal = () => {
  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">BI Portal</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Services </span>/ Portal
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <br />
      <section>
        <Container>
          <h2>
            Unlock Business Insights with Our Comprehensive BI Portal Solution
          </h2>
          <p>
            Discover the power of data-driven decision-making with our advanced
            BI Portal.
            <br />
            <br />
            Built with scalability and flexibility in mind, our BI Portal can
            adapt to your evolving business needs, ensuring that you always have
            access to the most relevant and up-to-date information.
            <br />
            <br />
            Experience the power of our BI Portal and unleash the full potential
            of your data to drive business growth and success.
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
              <p className="about-heading">BI PORTAL SOLUTION</p>
              <p>
                We offers a centralized platform where you can access, analyze,
                and visualize key business metrics and insights in real-time.
                With customizable dashboards and intuitive interfaces, you can
                gain deeper visibility into your organization's performance
                across various departments and functions.
                <br />
                <br />
                From sales trends and customer behavior to operational
                efficiency and financial analytics, our BI Portal provides a
                comprehensive view of your business landscape, enabling you to
                make informed decisions quickly and effectively.
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

export default Portal;
