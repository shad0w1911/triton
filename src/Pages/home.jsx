/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import transition from "../components/transitions";
import CountUp from "react-countup";
import ArrowCircleDown from "@mui/icons-material/ArrowCircleDown";
import logo from "../assets/icon.png";
import ScrollTrigger from "react-scroll-trigger";
import Services from "../components/services";
import Aos from "aos";
import "../components/Pattern.css";
import "../components/Dividers.css";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";
const Home = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Container fluid="true">
        {/* Hero */}
        <section className="hero-home">
          <Container>
            <div className="hero-wrapper">
              <p className="hero-heading1 primary">
                Transform Ideas into Reality,
              </p>
              <p className="hero-heading2">
                Ready to revolutionize your business?
              </p>
              <p className="hero-text text-white">
                Explore the limitless possibilities with Triton Consultancy.
                Unleash the power of technology,
                <br />
                streamline your operations, and elevate your customer
                experience.
              </p>
              <a href="#intro" className="hero-btn">
                <p>
                  Click To Learn More <br />
                  <ArrowCircleDown className="" />
                </p>
              </a>
            </div>
          </Container>
        </section>
        {/* Intro */}
        <section className="intro" id="intro">
          <br />
          <br />
          <Container>
            <Row>
              <Col xs="12" sm="12" md="2" lg="2" className="logo-holder">
                <img src={logo} alt="logo" className="logo" />
              </Col>
              <Col xs="12" sm="12" md="2" lg="10" className="mobile-padding">
                <p className="heading-main">Welcome to Triton Consultancy.</p>
                <p className="portfolio-text">
                  A distinguished technology solutions company thriving since
                  2020. As a pivotal member of the Triton Group of Companies,
                  our global presence underscores our commitment to excellence.
                  <br />
                  <br />
                  Elevating businesses worldwide, Triton is your foremost
                  partner in outsourcing, delivering bespoke end-to-end
                  solutions for enterprises of all sizes. With a focus on
                  distinct niche markets, we empower organizations to
                  concentrate on core activities, ensuring significant returns
                  on investment. Our mission revolves around synchronizing
                  businesses with cutting-edge technologies, enabling them to
                  streamline operations, reduce overheads, and enhance
                  productivity through strategic automation and outsourcing.
                </p>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <Container>
            <Row data-aos="fade" data-aos-easing=" ease-in-sine">
              <Col sm="12" md="6" lg="6" className="mobile-padding">
                <div data-aos="slide-right" data-aos-easing=" ease-in-sine">
                  <p className="heading-main">What We Do</p>
                  <p className="portfolio-text">
                    Immersed in the realms of Information Technology and
                    Business Process Outsourcing, Triton Consultancy is your
                    beacon for transformative solutions.
                  </p>
                  <p className="heading-main">Why We Do It</p>
                  <p className="portfolio-text">
                    We are catalysts for our clients' competitive ascent,
                    harnessing the potent force of technology to propel
                    businesses to their zenith. Our mission is to shape ideas
                    into highly functional products and services, unlocking the
                    true potential within every venture
                  </p>
                </div>
              </Col>
              <Col sm="12" md="6" lg="6" className="mobile-padding">
                <div data-aos="slide-left" data-aos-easing=" ease-in-sine">
                  <p className="heading-main">Our Services Encompass</p>
                  <ul className="home-list">
                    <li className="portfolio-text">
                      <i className="bold">Customer Journey Mapping</i>:
                      Navigating the path to customer satisfaction through
                      strategic mapping.
                    </li>
                    <li className="portfolio-text">
                      <i className="bold">User Experience Design</i>: Crafting
                      intuitive and captivating user interfaces for optimal
                      engagement.
                    </li>
                    <li className="portfolio-text">
                      <i className="bold">Personalization and Data Analytics</i>
                      : Tailoring experiences through data-driven insights.
                    </li>
                    <li className="portfolio-text">
                      <i className="bold">Omnichannel Integration</i>: Weaving a
                      seamless tapestry across all touchpoints for a unified
                      customer journey.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </section>
        {/* Highlights*/}
        <section
          className="home-banner-wrapper services-bg"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <Container fluid="true" className="home-services ">
            <h2>HIGHLIGHTS OF OUR SERVICES</h2>
          </Container>
        </section>
        <Container
          fluid="true"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <br />
          <Services />
          <br />
        </Container>
        {/* Counters */}
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <section className="home-counters-wrapper counters-bg">
            <Container fluid="true" className="home-counters ">
              <Row className="home-counters-content">
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={23040}
                            duration={2}
                            delay={0}
                          />
                        )}
                        <p className="counter-label">TOTAL WORKING HOURS</p>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp start={0} end={247} duration={3} delay={0} />
                        )}
                        <p className="counter-label">PROJECTS COMPLETED</p>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp start={0} end={120} duration={3} delay={0} />
                        )}
                        <p className="counter-label">WEEKLY WORKING HOURS</p>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp start={0} end={215} duration={3} delay={0} />
                        )}
                        <p className="counter-label">HAPPY CLIENTS</p>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </ScrollTrigger>
        <br />
        <br />
        <Differentiator />
        <br />
        <br />
        <CallToAction />
      </Container>
    </>
  );
};

export default transition(Home);
