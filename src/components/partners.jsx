import React from "react";
import beForward from "../assets/Partners/beforward.png";
import digitronics from "../assets/Partners/digitronics.png";
import elavon from "../assets/Partners/elavon.png";
import dvago from "../assets/Partners/dvago.png";
import logopic from "../assets/Partners/Logopic.png";
import bonanza from "../assets/Partners/bonanza.jpeg";
import gatron from "../assets/Partners/Gatron.webp";
import novatex from "../assets/Partners/novatex.jpg";
import stac from "../assets/Partners/stac.png";
import "./partners.css";

const Partners = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Our Partners
      </h2>
      <br />
      <section className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={beForward} alt="beForward" />
          </div>
          <div className="slide">
            <img src={digitronics} alt="digitronics" />
          </div>
          <div className="slide">
            <img src={dvago} alt="dvago" />
          </div>
          <div className="slide">
            <img src={logopic} alt="logopic" />
          </div>
          <div className="slide">
            <img src={bonanza} alt="bonanza" />
          </div>
          <div className="slide">
            <img src={gatron} alt="gatron" />
          </div>
          <div className="slide">
            <img src={novatex} alt="novatex" />
          </div>
          <div className="slide">
            <img src={elavon} alt="elevon" />
          </div>
          <div className="slide">
            <img src={stac} alt="stac" />
          </div>
          <div className="slide">
            <img src={beForward} alt="beForward" />
          </div>
          <div className="slide">
            <img src={digitronics} alt="digitronics" />
          </div>
          <div className="slide">
            <img src={dvago} alt="dvago" />
          </div>
          <div className="slide">
            <img src={logopic} alt="logopic" />
          </div>
          <div className="slide">
            <img src={bonanza} alt="bonanza" />
          </div>
          <div className="slide">
            <img src={gatron} alt="gatron" />
          </div>
          <div className="slide">
            <img src={novatex} alt="novatex" />
          </div>
          <div className="slide">
            <img src={elavon} alt="elevon" />
          </div>
          <div className="slide">
            <img src={stac} alt="stac" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
