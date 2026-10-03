import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import transition from "../components/transitions";
import basit from "../assets/about/basit.jfif";
import salar from "../assets/about/salar.jfif";
import sheraz from "../assets/about/sheraz.jfif";
import abdullah from "../assets/about/abdullah.jfif";
import Partners from "../components/partners";
import AOS from "aos";
import "aos/dist/aos.css";
import Differentiator from "../components/differentiator";
import CallToAction from "../components/callToAction";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid="true">
      <div className="services-banner-wrapper">
        <div className="services-banner">
          <Container>
            <div className="services-banner-content">
              <div>
                <p className="heading">ABOUT US</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Home </span>/ About Us
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container className="portfolio-content-wrapper">
        <p className="portfolio-heading">
          Our Journey: Pioneering Excellence Since 2020
        </p>
        <p className="portfolio-text" style={{ textAlign: "center" }}>
          Join us in our journey of continuous growth, where history, mission,
          and values converge to create a legacy of excellence at Triton
          Consultancy Private Limited.
        </p>
        <Row>
          <Col sm="12" md="6" lg="6">
            <p className="about-heading">History:</p>
            <p className="portfolio-text">
              Established in 2020, Triton Consultancy embarked on a journey
              driven by innovation and a commitment to shaping the future of
              technology solutions. From our modest beginnings, we have evolved
              into a global force, consistently delivering transformative
              outcomes for our clients.
            </p>
            <p className="about-heading">Mission:</p>
            <p className="portfolio-text">
              At Triton, our mission is to be the catalyst for our clients'
              success. We strive to empower businesses with cutting-edge
              technology, enabling them to unlock their true potential. Through
              strategic partnerships, personalized solutions, and a relentless
              pursuit of excellence, we aim to elevate organizations to
              unprecedented heights.
            </p>
          </Col>
          <Col sm="12" md="6" lg="6">
            <p className="about-heading">Values:</p>
            <p className="portfolio-text">
              <ul className="about-list">
                <li>
                  <i className="bold">Innovation</i>: We embrace creativity and
                  innovation as the cornerstones of progress.
                </li>
                <li>
                  <i className="bold">Integrity</i>: We uphold the highest
                  standards of integrity in all our interactions and endeavors.
                </li>
                <li>
                  <i className="bold">Collaboration</i>: We believe in the power
                  of collaboration, fostering strong partnerships to achieve
                  shared success.
                </li>
                <li>
                  <i className="bold">Excellence</i>: We are committed to
                  delivering excellence in every aspect of our work, setting
                  benchmarks for quality and performance.
                </li>
                <li>
                  <i className="bold">Customer-Centricity</i>: Our customers are
                  at the heart of everything we do. We prioritize their needs,
                  ensuring unparalleled satisfaction.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
      <section data-aos="fade-up" data-aos-easing="ease-in-sine">
        <section className="about-banner-wrapper services-bg">
          <Container fluid="true" className="home-services ">
            <h2>FOUNDING MEMBERS</h2>
          </Container>
        </section>
        <br />
        <br />
        <section>
          <Container>
            <div className="profile-section">
              <div className="profileCard-wrapper">
                <div className="profileCard-media">
                  <img
                    src={basit}
                    alt="basit osmani"
                    className="profileCard-img"
                  />
                </div>
                <div className="profileCard-text">
                  <h2>Abdul Basit Osmani</h2>
                  <h5>CEO & Co-Founder</h5>
                  <p>
                    Abdul Basit Osmani serves as the CEO and Co-Founder of
                    Triton Consultancy, where he leads with a hands-on approach
                    and a deep focus on client success. Known for his commitment
                    to sales excellence and building long-term relationships, he
                    plays a central role in guiding the company’s strategy, team
                    development, and international expansion. His leadership is
                    rooted in consistency, accountability, and a strong belief
                    in delivering value—every single day.
                  </p>
                </div>
              </div>
              <div className="profileCard-wrapper">
                <div className="profileCard-media">
                  <img
                    src={salar}
                    alt="muhammad salar"
                    className="profileCard-img"
                  />
                </div>
                <div className="profileCard-text">
                  <h2>Muhammad Salar</h2>
                  <h5>Director of Operations</h5>
                  <p>
                    Muhammad Salar plays a vital role in keeping Triton
                    Consultancy running smoothly. As Director of Operations, he
                    focuses on building efficient systems, supporting the team,
                    and ensuring that day-to-day processes stay on track. Known
                    for his calm approach and reliability, Salar works quietly
                    behind the scenes—making sure everything gets done, the
                    right way.
                  </p>
                </div>
              </div>
              <div className="profileCard-wrapper">
                <div className="profileCard-media">
                  <img
                    src={sheraz}
                    alt="shiraz saleem samad"
                    className="profileCard-img"
                  />
                </div>
                <div className="profileCard-text">
                  <h2>Shiraz Saleem Samad</h2>
                  <h5>Director – Admin & HR</h5>
                  <p>
                    Shiraz leads the people and processes at Triton. With a
                    strong emphasis on culture, talent management, and
                    administrative integrity, he ensures the company remains a
                    place where individuals grow and systems stay sharp. His
                    leadership in HR and admin keeps the team aligned and
                    motivated.
                  </p>
                </div>
              </div>
              <div className="profileCard-wrapper">
                <div className="profileCard-media">
                  <img
                    src={abdullah}
                    alt="abdullah bilwani"
                    className="profileCard-img"
                  />
                </div>
                <div className="profileCard-text">
                  <h2>Abdullah Bilwani</h2>
                  <h5>Director & Co-Founder</h5>
                  <p>
                    Strategic and forward-thinking, Abdullah Bilwani co-founded
                    Triton Consultancy with the ambition to create a lasting
                    impact in the global outsourcing and vehicle trading space.
                    His insights into business development and planning have
                    been instrumental in Triton’s journey and continued success.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </section>
      <br />
      <br />
      <br />
      <Container fluid="true" data-aos="zoom-in" data-aos-easing="ease-in-sine">
        <Partners />
      </Container>
      <br />
      <br />
      <Differentiator />
      <br />
      <br />
      <CallToAction />
    </Container>
  );
};

export default transition(Services);
