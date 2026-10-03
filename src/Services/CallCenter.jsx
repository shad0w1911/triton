import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import call1 from "../assets/services/callingAgent.jpg";
import call2 from "../assets/services/callingAgent.2.jpg";
import CallCenterCard from "../components/callCenterCard";
import Data from "../utils/callGridData";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const CallCenter = () => {
  const [active, setActive] = useState("0");

  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">INBOUND & OUTBOUND CALL CENTER</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Services </span>/ Call Center
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <br />
      <section>
        <Container>
          <h2>Prioritize What’s Important</h2>
          <p>
            In today’s competitive market, businesses that fail to prioritize
            the needs of their customers are often faced with challenges
            concerning business continuity.
            <br />
            <br />
            Support should be provided 24 hours a day, seven days a week, to
            ensure customer loyalty and retention. But you need not dedicate
            your in-house resources to customer support; Triton Consultancy
            allows you to outsource contact center services.
            <br />
            <br />
            Outsourcing your contact center can help improve your performance,
            streamline business processes, reduce errors, and minimize the cost
            of operation. Here’s a list of services that can fulfill your
            customer’s demand for real-time support.
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
              <p className="about-heading">Inbound Calls</p>
              <p>
                As a brand, you must allocate resources for handling incoming
                calls and catering to customers in real time. This is the
                customers, or prospective clients’ attempt to initiate contact
                with your business; hence it must be addressed with the utmost
                professionalism to cast a good first impression. With Triton
                Consultancy’s inbound call services, you can strengthen
                relationships, build confidence, reap better profits, boost
                customer satisfaction rates and offer practical solutions for
                queries.
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="services-row  px-4">
            <Col lg="6" md="6" sm="12">
              <p className="about-heading">Outbound Calls</p>
              <p>
                This is a crucial business operations function requiring sales
                representatives or customer support agents to call third
                parties. It widens the brand reach as you can approach your
                target audience, introduce your product or service, and
                encourage prospects to convert.
                <br />
                <br />
                Why consider expansion when you outsource outbound call services
                to Triton Consultancy? We offer outbound call services of the
                following types: telemarketing, advisory, customer service,
                sales, lead generation, and survey calls.
              </p>
            </Col>
            <Col lg="6" md="6" sm="12">
              <img
                src={call2}
                alt="calling 2"
                className="services-call-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <section className="section-grid-holder">
        <Container>
          <p className="section-grid-holder-subHeading">SERVICES</p>
          <p className="section-grid-holder-heading">
            Inbound Call Center Services <span>Services</span>
          </p>
          <p className="section-grid-holder-text">
            Our Inbound Call Center Services provide comprehensive solutions for
            businesses looking to streamline their customer service operations.
            With our expert agents and state-of-the-art technology, we enhance
            customer satisfaction, optimize processes, and drive business
            growth.
          </p>
        </Container>
        <br />
        <Container>
          <div className="callCenter-grid">
            <div class="item1">
              <button
                onClick={() => setActive("0")}
                className="callCenter-grid-btn"
              >
                Customer Service
              </button>
            </div>
            <div class="item2">
              <button
                onClick={() => setActive("1")}
                className="callCenter-grid-btn"
              >
                Order taking and Processing
              </button>
            </div>
            <div class="item3">
              <button
                onClick={() => setActive("2")}
                className="callCenter-grid-btn"
              >
                TECHNICAL SUPPORT
              </button>
            </div>
            <div class="item4">
              <button
                onClick={() => setActive("3")}
                className="callCenter-grid-btn"
              >
                SALES SUPPORT
              </button>
            </div>
            <div class="item5">
              <button
                onClick={() => setActive("4")}
                className="callCenter-grid-btn"
              >
                PAYMENT PROCESSING
              </button>
            </div>
            <div class="item6">
              {active === "0" && <CallCenterCard data={Data} cardIndex={0} />}
              {active === "1" && <CallCenterCard data={Data} cardIndex={1} />}
              {active === "2" && <CallCenterCard data={Data} cardIndex={2} />}
              {active === "3" && <CallCenterCard data={Data} cardIndex={3} />}
              {active === "4" && <CallCenterCard data={Data} cardIndex={4} />}
              {active === "5" && <CallCenterCard data={Data} cardIndex={5} />}
              {active === "6" && <CallCenterCard data={Data} cardIndex={6} />}
              {active === "7" && <CallCenterCard data={Data} cardIndex={7} />}
              {active === "8" && <CallCenterCard data={Data} cardIndex={8} />}
              {active === "9" && <CallCenterCard data={Data} cardIndex={9} />}
            </div>
            <div class="item7">
              <button
                onClick={() => setActive("5")}
                className="callCenter-grid-btn"
              >
                UPSELLING AND CROSS-SELLING
              </button>
            </div>
            <div class="item8">
              <button
                onClick={() => setActive("6")}
                className="callCenter-grid-btn"
              >
                COMPLAINT HANDLING
              </button>
            </div>
            <div class="item9">
              <button
                onClick={() => setActive("7")}
                className="callCenter-grid-btn"
              >
                CUSTOMER RETENTION
              </button>
            </div>
            <div class="item10">
              <button
                onClick={() => setActive("8")}
                className="callCenter-grid-btn"
              >
                CONTACT CENTER
              </button>
            </div>
            <div class="item11">
              <button
                onClick={() => setActive("9")}
                className="callCenter-grid-btn"
              >
                TECHNOLOGY SERVICES
              </button>
            </div>
          </div>
        </Container>
        <br />
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

export default CallCenter;
