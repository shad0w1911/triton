import React from "react";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import emailSupport from "../assets/Icons/email.png";
import chatSupport from "../assets/Icons/chatSupport.png";
import techSupport from "../assets/Icons/techSupport.png";
import callCenter from "../assets/Icons/callCenter.png";
import salesAgent from "../assets/Icons/SalesAgent.png";
import portal from "../assets/Icons/biPortal.png";
import itService from "../assets/Icons/outsourcedIT.png";
import telephone from "../assets/Icons/telephone.png";

const Services = () => {
  return (
    <Container>
      <div className="home-services-content">
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img
              src={callCenter}
              className="services-icon"
              alt="In & Out-bound Call Center"
            />
          </div>
          <p className="home-services-heading">In & Out-bound Call Center</p>
          <Link
            to={"/services/call_center"}
            className="primary home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img
              src={techSupport}
              className="services-icon"
              alt="Technical Support"
            />
          </div>
          <p className="home-services-heading">Technical Support</p>
          <Link
            to={"/services/tech_support"}
            className="primary home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img
              src={chatSupport}
              className="services-icon"
              alt="Chat Support"
            />
          </div>
          <p className="home-services-heading">Chat Support</p>
          <Link
            to={"/services/chat_support"}
            className="primary home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img
              src={emailSupport}
              alt="Email Support"
              className="services-icon"
            />
          </div>
          <p className="home-services-heading">Email Support</p>
          <Link
            to={"/services/email_support"}
            className="primary home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
      </div>
      <div className="home-services-content">
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img
              src={telephone}
              className="services-icon"
              alt="Telephone Answering Service"
            />
          </div>
          <p className="home-services-heading">Telephone Answering</p>
          <Link
            to={"/services/telephone"}
            className="primary home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img
              src={itService}
              className="services-icon"
              alt="Outsourced IT Service"
            />
          </div>
          <p className="home-services-heading">Outsourced IT Service</p>
          <Link
            to={"/services/it_service"}
            className="primary home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img
              src={salesAgent}
              className="services-icon"
              alt="Sales Agents & ISA"
            />
          </div>
          <p className="home-services-heading">Sales Agents & ISA</p>
          <Link
            to={"/services/sales_agents"}
            className="primary  home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
        <div className="home-services-card">
          <div className="home-services-image-holder">
            <img src={portal} className="services-icon" alt="BI Portal" />
          </div>
          <p className="home-services-heading">BI Portal</p>
          <Link
            to={"/services/bi_portal"}
            className="primary home-services-button"
          >
            Learn More{" "}
            <ArrowRightAltOutlinedIcon className="home-services-icon" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Services;
