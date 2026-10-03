import React from "react";
import { Col, Container, Row } from "reactstrap";

const RecentWorks = () => {
  return (
    <Container>
      <div className="rw-wrapper">
        <Row className="rw-wrapper-content">
          <Col sm="4" md="4" lg="4">
            <div className="rw-wrapper-card web2"></div>
          </Col>
          <Col sm="4" md="4" lg="4">
            <div className="rw-wrapper-card mobApp1"></div>
          </Col>
          <Col sm="4" md="4" lg="4">
            <div className="rw-wrapper-card soft1"></div>
          </Col>
        </Row>
        <br />
        <Row className="rw-wrapper-content">
          <Col sm="4" md="4" lg="4">
            <div className="rw-wrapper-card soft2"></div>
          </Col>
          <Col sm="4" md="4" lg="4">
            <div className="rw-wrapper-card web1"></div>
          </Col>
          <Col sm="4" md="4" lg="4">
            <div className="rw-wrapper-card mobApp2"></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default RecentWorks;
