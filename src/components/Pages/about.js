import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import "../css/about.css";
import aboutImg from "../../Assets/Images/Why-Flexible-Managed-1024x536.jpg";
import dummyImg from "../../Assets/Images/dummy-image.jpg";

const About = () => {
  return (
    <Container fluid="true">
      <div className="banner">
        <Container>
          <h1 className="brand text-left">ABOUT US</h1>
        </Container>
      </div>
      <br />
      <Container>
        <Row>
          <Col lg md>
            <div>
              <h1 className="aboutHeading text-left">WHO WE ARE?</h1>
              <p className="text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br /> It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software.
              </p>
            </div>
          </Col>
          <Col lg md>
            <div>
              <img
                src={aboutImg}
                alt=""
                className="img-fluid"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <br />
        <hr style={{ color: "rgb(155,132,76)" }} />
        <br />
        <Row className="justify-content-center">
          <Col>
            <h1 className="aboutHeading text-left">What We Believe</h1>
            <br />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="text-black-50">
                  Our Clients
                </Accordion.Header>
                <Accordion.Body className="text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Management</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg="4" md="4">
            <h1 className="aboutHeading text-left">Careers</h1>
            <br />
            <Card style={{ height: "85%" }}>
              <Card.Text className="text-left p-5">
                <h4>WE'RE HIRING!</h4>
                We're offering great oppurtunites for Project & Marketing
                Manager.
                <br />
                <br />
                <a href="/Contact" class="overlayBtn">
                  Apply Now
                </a>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <br />
        <hr style={{ color: "rgb(155,132,76)" }} />
        <br />
        <h1 className="brand">
          <span style={{ color: "rgb(155,132,76)" }}>our</span> team
        </h1>
        <br />
        <Row className="justify-content-evenly">
          <Col lg md>
            <Card style={{ width: "80%" }}>
              <Card.Img variant="top" src={dummyImg} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg md>
            <Card style={{ width: "80%" }}>
              <Card.Img variant="top" src={dummyImg} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg md>
            <Card style={{ width: "80%" }}>
              <Card.Img variant="top" src={dummyImg} className="img-fluid" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </Container>
  );
};

export default About;
