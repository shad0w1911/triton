import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import call1 from "../assets/services/chat.jpg";
import ChatSupportCard from "../components/chatSupportCard";
import Data from "../utils/chatSupportData";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const ChatSupport = () => {
  const [active, setActive] = useState("0");

  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">CHAT SUPPORT</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Services </span>/ Chat Support
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
            Would you prefer a chatbot or a human answering your live chat
            portal? Triton Consultancy offers contact center services to
            enlighten inquiring parties with product information, service
            details, and any other assistance consumers may require.
            <br />
            <br />
            This service makes it easy to ensure that you’re forming
            long-lasting relationships with your customers. Additionally,
            outsourcing allows you to dedicate your employee’s entrepreneurial
            skills to the core operations of your business.
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
              <p className="about-heading">Chat Support</p>
              <p>
                Chat customer service are crucial for all modern businesses;
                this includes building an email list for targeting audiences and
                engaging customers that visit your website via a live chat
                platform.
                <br />
                <br />
                Triton Consultancy offers state-of-the-art chat support that’s
                continually updated and improved to serve your customers better.
                We take full responsibility for customer management so you can
                focus on your bottom line.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section>
        <Container fluid="true">
          <Row>
            <Col lg={3} className="chatSupport-grid-img">
              <div></div>
            </Col>
            <Col>
              <Row>
                <div className="chatSupport-grid-details">
                  <p className="chatSupport-grid-subHeading">Services</p>
                  <p className="chatSupport-grid-heading">
                    Chat Support <span>Services</span>
                  </p>
                  <p className="chatSupport-grid-text">
                    We offer comprehensive chat support services that are
                    customized to meet the unique needs of your business,
                    including technical support, sales support, customer
                    service, and more.
                  </p>
                </div>
              </Row>
              <Row>
                <Col md="4" lg="4">
                  <div className="chatSupport-grid-btn-holder">
                    <button
                      className="chatSupport-grid-btn"
                      onClick={() => setActive("0")}
                    >
                      TECHNICAL CHAT SUPPORT
                    </button>
                    <button
                      className="chatSupport-grid-btn"
                      onClick={() => setActive("1")}
                    >
                      SALES CHAT SUPPORT
                    </button>
                    <button
                      className="chatSupport-grid-btn"
                      onClick={() => setActive("2")}
                    >
                      CUSTOMER CHAT SUPPORT
                    </button>
                    <button
                      className="chatSupport-grid-btn"
                      onClick={() => setActive("3")}
                    >
                      PRODUCT CHAT INFORMATION
                    </button>
                    <button
                      className="chatSupport-grid-btn"
                      onClick={() => setActive("4")}
                    >
                      TROUBLESHOOTING CHAT
                    </button>
                    <button
                      className="chatSupport-grid-btn"
                      onClick={() => setActive("5")}
                    >
                      EMAIL CHAT SUPPORT SERVICES
                    </button>
                  </div>
                </Col>
                <Col style={{ backgroundColor: "#f6f6f6" }}>
                  {active === "0" && (
                    <ChatSupportCard
                      className="chatSupport-grid-card"
                      data={Data}
                      cardIndex={0}
                    />
                  )}
                  {active === "1" && (
                    <ChatSupportCard
                      className="chatSupport-grid-card"
                      data={Data}
                      cardIndex={1}
                    />
                  )}
                  {active === "2" && (
                    <ChatSupportCard
                      className="chatSupport-grid-card"
                      data={Data}
                      cardIndex={2}
                    />
                  )}
                  {active === "3" && (
                    <ChatSupportCard
                      className="chatSupport-grid-card"
                      data={Data}
                      cardIndex={3}
                    />
                  )}
                  {active === "4" && (
                    <ChatSupportCard
                      className="chatSupport-grid-card"
                      data={Data}
                      cardIndex={4}
                    />
                  )}
                  {active === "5" && (
                    <ChatSupportCard
                      className="chatSupport-grid-card"
                      data={Data}
                      cardIndex={5}
                    />
                  )}
                </Col>
              </Row>
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

export default ChatSupport;
