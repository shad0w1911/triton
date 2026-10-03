import React from "react";
import { Container } from "reactstrap";
import inItTogether from "../assets/Icons/inItTogether.webp";
import customerfirst from "../assets/Icons/customerfirst.webp";
import innovate from "../assets/Icons/innovate.webp";
import proactive from "../assets/Icons/proactive.webp";
import CallToAction from "../components/callToAction";
import health from "../assets/Icons/Careers/healthcare.png";
import fund from "../assets/Icons/Careers/provident.png";
import bonus from "../assets/Icons/Careers/bonus.png";
import food from "../assets/Icons/Careers/food.png";
import gaming from "../assets/Icons/Careers/gaming.png";
import travel from "../assets/Icons/Careers/travel.jpg";
import vacation from "../assets/Icons/Careers/vacation.png";
import party from "../assets/Icons/Careers/party.png";

const Careers = () => {
  return (
    <>
      <Container fluid="true">
        <div className="portfolio-banner-wrapper">
          <div className="portfolio-banner">
            <Container>
              <div className="portfolio-banner-content">
                <div>
                  <p className="heading">CAREERS</p>
                </div>
                <div>
                  <p className="link">
                    <span className="active">Home </span>/ Careers
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <Container>
        <p className="portfolio-heading">Careers</p>
        <p className="portfolio-text" style={{ textAlign: "center" }}>
          Embark on an exploration of exciting career opportunities at Triton
          Consultancy and consider joining our dynamic team. We extend a diverse
          array of positions tailored to various skill sets and interests. At
          Triton Consultancy, we are deeply committed to cultivating a culture
          that prioritizes continuous growth and development, fostering an
          environment where every individual can thrive and reach their full
          potential.
        </p>
      </Container>
      <br />
      <br />
      <Container fluid="true">
        <section className="about-banner-wrapper services-bg">
          <Container fluid="true" className="home-services ">
            <h2>OUR VALUES</h2>
          </Container>
        </section>
      </Container>
      <br />
      <br />
      <Container>
        <div className="wrapper-cards-careers">
          <div>
            <div className="card-careers">
              <img
                src={inItTogether}
                alt="in it together"
                className="img-card-careers"
              />
              <h2 className="card-heading-careers">In it Together</h2>
              <p className="card-text-careers">
                Together, We Can Achieve Anything.
              </p>
            </div>
          </div>
          <div>
            <div className="card-careers">
              <img
                src={customerfirst}
                alt="in it together"
                className="img-card-careers"
              />
              <h2 className="card-heading-careers">Put The Customer First</h2>
              <p className="card-text-careers">
                Our Customers Interest Are The Heart Of Our Decisions.
              </p>
            </div>
          </div>
          <div>
            <div className="card-careers">
              <img
                src={innovate}
                alt="in it together"
                className="img-card-careers"
              />
              <h2 className="card-heading-careers">
                Innovate for the Greater Good
              </h2>
              <p className="card-text-careers">
                Our Solutions Help The Entire Work Ecosystem.
              </p>
            </div>
          </div>
          <div>
            <div className="card-careers">
              <img
                src={proactive}
                alt="in it together"
                className="img-card-careers"
              />
              <h2 className="card-heading-careers">Proactive Support</h2>
              <p className="card-text-careers">
                We Are Always Available to Help Our Customers.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <p className="benefits-heading">
          Benefits At <span>Triton Consultancy</span>
        </p>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <div className="careers-highlights-wrapper">
          <div className="careers-highlights-card">
            <img src={health} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">Health Care</p>
          </div>
          <div className="careers-highlights-card">
            <img src={travel} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">Travel Allowance</p>
          </div>
          <div className="careers-highlights-card">
            <img src={fund} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">Provident Fund</p>
          </div>
          <div className="careers-highlights-card">
            <img src={vacation} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">Vacations</p>
          </div>
        </div>
        <br />
        <div className="careers-highlights-wrapper">
          <div className="careers-highlights-card">
            <img src={gaming} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">Gaming Arena</p>
          </div>
          <div className="careers-highlights-card">
            <img src={food} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">FOOD</p>
          </div>
          <div className="careers-highlights-card">
            <img src={bonus} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">
              Performance Based Bonus
            </p>
          </div>
          <div className="careers-highlights-card">
            <img src={party} alt="" className="careers-highlights-icon" />
            <p className="careers-highlights-heading">Events & Picnic</p>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <CallToAction />
    </>
  );
};

export default Careers;
