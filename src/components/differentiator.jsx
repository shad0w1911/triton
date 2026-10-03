import React from "react";
import { Col, Container, Row } from "reactstrap";
import home from "../assets/Svg/computer.svg";
import growth from "../assets/Svg/business_profits.svg";
import leadership from "../assets/Svg/leadership_growth.svg";
import team from "../assets/Svg/team.svg";

const Differentiator = () => {
  return (
    <>
      <Container>
        <div className="dif-description">
          <p className="dif-subHeading">DIFFERENTIATORS</p>
          <p className="dif-heading">
            What Sets Us <span>Apart</span>
          </p>
          <p className="dif-text">
            What sets us apart is our commitment to providing personalized
            consulting services tailored to the specific needs and goals of each
            of our clients. Our experienced team of consultants work
            collaboratively with businesses to help them achieve sustainable
            growth and success.
          </p>
        </div>
        <Row className="dif-prop-container">
          <Col className="dif-prop-wrapper">
            <div className="dif-prop-header">
              <p className="dif-prop-heading">AT HOME ON YOUR HOME SCREEN</p>
              <img src={home} alt="home" className="icon" />
            </div>
            <p className="dif-prop-text py-4">
              Our services leverage the latest advances in technology, including
              artificial intelligence, data analytics, and cloud computing. By
              staying on the cutting edge of technology, we are able to deliver
              solutions that are faster, more efficient, and more effective,
              allowing our clients to achieve their business goals more easily.
            </p>
          </Col>
          <Col className="dif-prop-wrapper">
            <div className="dif-prop-header">
              <p className="dif-prop-heading">RAPID AND SUSTAINED GROWTH</p>
              <img src={growth} alt="growth" className="icon" />
            </div>
            <p className="dif-prop-text py-4">
              We have experienced rapid, sustained growth since our inception,
              driven by our commitment to excellence, innovation, and customer
              service. Our team is dedicated to meeting the evolving needs of
              our clients, and we are constantly expanding our services to
              ensure that our clients have access to the latest and most
              effective solutions.
            </p>
          </Col>
        </Row>
        <Row className="dif-prop-container mt-4">
          <Col className="dif-prop-wrapper">
            <div className="dif-prop-header">
              <p className="dif-prop-heading">INDUSTRY-LEADING CX</p>
              <img src={leadership} alt="leadership" className="icon" />
            </div>
            <p className="dif-prop-text py-4">
              At our company, we understand that the customer experience (CX) is
              critical to success. We have built our business on a foundation of
              exceptional customer service, and we are constantly striving to
              improve our CX to meet the needs of our clients. we go above and
              beyond to ensure that our clients are satisfied with our services.
            </p>
          </Col>
          <Col className="dif-prop-wrapper">
            <div className="dif-prop-header">
              <p className="dif-prop-heading">PEOPLE-FIRST PERIOD</p>
              <img src={team} alt="teamwork" className="icon" />
            </div>
            <p className="dif-prop-text py-4">
              Our company is built on a culture of respect, empathy, and
              collaboration. We believe that our people are our most valuable
              asset, and we are committed to creating a work environment that is
              inclusive, supportive, and empowering. By putting people first, we
              are able to attract and retain top talent, and this is reflected
              in the quality of our services and satisfaction.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Differentiator;
