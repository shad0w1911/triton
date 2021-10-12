import React from "react";
import { ButtonGroup, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../../Assets/Images/photo-1486406146926-c627a92ad1ab.jfif";
import "../css/home.css";

const Home = () => {
  return (
    <Container fluid="true">
      <img
        src="https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs"
        alt=""
        className="video"
      />
      <div class="vidOverlay container">
        <h1 className="white">Welcome to</h1>
        <h1 className="brand white">TRITON CONSULTANCY</h1>
        <br />
        <a href="#home" class="overlayBtn">
          Learn More
        </a>
      </div>
      <div id="home">
        <div class="textHolder">
          <h1 className="brand">
            <span style={{ color: "rgb(155, 132, 76)" }}>ABOUT</span> US
          </h1>
          <h4>WHO WE ARE</h4>
          <br />
          <Row>
            <Col lg md className="intro">
              <h1 style={{ textAlign: "left" }}>
                We Are{" "}
                <span style={{ fontFamily: "lato", fontWeight: 900 }}>
                  Triton
                </span>
              </h1>
              <p className="text-left">
                We are a leading company sit amet, consectetur adipisicing elit.
                Minus obcaecati pariatur officiis molestias eveniet harum
                laudantium obcaecati pariatur officiis molestias eveniet harum
                laudantium sed optio iste. molestias eveniet harum laudantium
                sed optio iste optio iste.
                <br />
                <ButtonGroup aria-label="Basic example">
                  <Button className="introBtn" variant="secondary">
                    OUR MISSION
                  </Button>
                  <Button className="introBtn" variant="secondary">
                    OUR ADVANTAGES
                  </Button>
                  <Button className="introBtn" variant="secondary">
                    OUR GUARANTEES
                  </Button>
                </ButtonGroup>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                harum culpa voluptate, explicabo corporis sunt aliquam sit
                deserunt quidem animi, tempore ex. Labore amet reprehenderit
                consequuntur esse quos repellendus eius.
              </p>
            </Col>
            <Col lg md>
              <img src={bg} alt="" width="500" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        <h1 className="brand">
          <span style={{ color: "rgb(155, 132, 76)" }}>OUR</span> SERVICES
        </h1>
        <h4>WHAT WE DOING</h4>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          possimus, nisi nihil recusandae officiis sapiente cumque labore
          accusamus nam magnam ipsum nesciunt exercitationem iure mollitia
          molestias delectus commodi, cum deserunt.
        </p>
        <Row>
          <Col lg md>
            <div className="card1">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="https://picsum.photos/seed/picsum/200/300"
                      alt="Avatar"
                      className="img-fluid"
                    />
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "-50%",
                        fontFamily: "lato",
                        fontWeight: "700",
                        fontSize: "20px",
                      }}
                    >
                      US BASED CAMPAIGNS
                    </p>
                  </div>
                  <div class="flip-card-back">
                    <p style={{ margin: "8%", textAlign: "center" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione facere impedit, doloremque magnam at eligendi
                      pariatur rerum fugit sapiente beatae repudiandae labore
                      incidunt accusamus et asperiores ipsum. A earum quos,
                      voluptatum molestias maxime maiores ipsa fugiat dolore
                      similique nulla beatae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg md>
            <div className="card1">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="https://picsum.photos/seed/picsum/200/300"
                      alt="Avatar"
                      className="img-fluid"
                    />
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "-50%",
                        fontFamily: "lato",
                        fontWeight: "700",
                        fontSize: "20px",
                      }}
                    >
                      AUTOMOBILE
                    </p>
                  </div>
                  <div class="flip-card-back">
                    <p style={{ margin: "8%", textAlign: "center" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione facere impedit, doloremque magnam at eligendi
                      pariatur rerum fugit sapiente beatae repudiandae labore
                      incidunt accusamus et asperiores ipsum. A earum quos,
                      voluptatum molestias maxime maiores ipsa fugiat dolore
                      similique nulla beatae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg md>
            <div className="card1">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="https://picsum.photos/seed/picsum/200/300"
                      alt="Avatar"
                      className="img-fluid"
                    />
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "-50%",
                        fontFamily: "lato",
                        fontWeight: "700",
                        fontSize: "20px",
                      }}
                    >
                      GLOBAL REAL-ESTATE
                    </p>
                  </div>
                  <div class="flip-card-back">
                    <p style={{ margin: "8%", textAlign: "center" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione facere impedit, doloremque magnam at eligendi
                      pariatur rerum fugit sapiente beatae repudiandae labore
                      incidunt accusamus et asperiores ipsum. A earum quos,
                      voluptatum molestias maxime maiores ipsa fugiat dolore
                      similique nulla beatae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div id="testimonials" class="container">
        <div>
          <br />
          <br />
          <h1 className="brand">
            <span style={{ color: "rgb(155,132,76)" }}>HAPPY</span> CUSTOMERS
          </h1>
          <h4>TESTIMONIALS</h4>
          <br />
          <div class="pt-5 pb-5 text-light" style={{ background: "#000" }}>
            <div
              id="client-testimonial-carousel"
              class="carousel slide"
              data-ride="carousel"
              style={{ height: "200px" }}
            >
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active text-center p-4">
                  <blockquote class="blockquote text-center">
                    <p class="mb-0">
                      <i class="fa fa-quote-left"></i> Everybody is a genius.
                      But if you judge a fish by its ability to climb a tree, it
                      will live its whole life believing that it is stupid.
                    </p>
                    <footer class="blockquote-footer mt-2">
                      Albert Einstein <cite title="Source Title">genius</cite>
                    </footer>
                    <p class="client-review-stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <i class="far fa-star"></i>
                    </p>
                  </blockquote>
                </div>
                <div class="carousel-item text-center p-4">
                  <blockquote class="blockquote text-center">
                    <p class="mb-0">
                      <i class="fa fa-quote-left"></i> Imagination is more
                      important than knowledge. Knowledge is limited.
                      Imagination encircles the world.
                    </p>
                    <footer class="blockquote-footer  mt-2">
                      Albert Einstein <cite title="Source Title">genius</cite>
                    </footer>
                    <p class="client-review-stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </p>
                  </blockquote>
                </div>
                <div class="carousel-item text-center p-4">
                  <blockquote class="blockquote text-center">
                    <p class="mb-0">
                      <i class="fa fa-quote-left"></i> A person who never made a
                      mistake never tried anything new.
                    </p>
                    <footer class="blockquote-footer  mt-2">
                      Albert Einstein <cite title="Source Title">genius</cite>
                    </footer>
                    <p class="client-review-stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </p>
                  </blockquote>
                </div>
              </div>
              <ol class="carousel-indicators">
                <li
                  data-target="#client-testimonial-carousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#client-testimonial-carousel"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#client-testimonial-carousel"
                  data-slide-to="2"
                ></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="container">
        <div>
          <br />
          <br />
          <h1 className="brand">
            <span style={{ color: "rgb(155,132,76)" }}>Contact</span> US
          </h1>
          <h4>GET IN TOUCH</h4>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            officia minus repudiandae dignissimos neque esse aspernatur dolorem
            corrupti ullam labore sunt provident, voluptatibus recusandae porro
            inventore exercitationem quaerat eius? Quos omnis molestias, minima
            nostrum labore eaque expedita sequi magnam quisquam.
          </p>
          <br />
          <Link to="/Contact" class="overlayBtn">
            GET IN TOUCH
          </Link>
          <br />
          <br />
        </div>
      </div>
      <br />
    </Container>
  );
};

export default Home;
