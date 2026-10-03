import React from "react";
import { Container } from "reactstrap";
import transition from "../components/transitions";
import CallToAction from "../components/callToAction";
import "./card.css";
import { Link } from "react-router-dom";
import image from "../assets/Icons/callCenter.png";
import portal from "../assets/Icons/biPortal.png";
import chat from "../assets/Icons/chatSupport.png";
import email from "../assets/Icons/email.png";
import it from "../assets/Icons/outsourcedIT.png";
import sales from "../assets/Icons/SalesAgent.png";
import tech from "../assets/Icons/techSupport.png";
import telephone from "../assets/Icons/telephone.png";

const Service = () => {
  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">SERVICES</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Home </span>/ Services
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container className="portfolio-content-wrapper">
        <p className="portfolio-heading">
          Embark on Your Innovation Odyssey with{" "}
          <span className="primary">Triton!</span>
        </p>
        <p className="portfolio-text" style={{ textAlign: "center" }}>
          Embark on a journey of growth and efficiency. Connect with Triton
          Consultancy and experience the impact of tailored solutions on your
          business success.
        </p>
        <section>
          <div id="card-area">
            <div class="wrapper">
              <div class="box-area">
                <div class="box">
                  <img alt="" src={image} />
                  <h3>
                    In & Out-bound
                    <br />
                    Call Center
                  </h3>
                  <div class="overlay">
                    <p>
                      Proficient in managing both inbound and outbound calls,
                      specializing in telemarketing, and providing comprehensive
                      support.
                    </p>
                    <Link to={"/services/call_center"}>Learn More</Link>
                  </div>
                </div>
                <div class="box">
                  <img alt="" src={tech} />
                  <h3>Technical Support</h3>
                  <div class="overlay">
                    <p>
                      Skilled in providing efficient and effective technical
                      support solutions, adept at troubleshooting issues and
                      guiding users to resolution with clarity and patience.
                    </p>
                    <Link to={"/services/tech_support"}>Learn More</Link>
                  </div>
                </div>
                <div class="box">
                  <img alt="" src={chat} />
                  <h3>Chat Support</h3>
                  <div class="overlay">
                    <p>
                      Experienced in delivering timely and personalized
                      assistance through chat support, adept at addressing
                      inquiries and resolving issues with professionalism and
                      empathy.
                    </p>
                    <Link to={"/services/chat_support"}>Learn More</Link>
                  </div>
                </div>
                <div class="box">
                  <img alt="" src={email} />
                  <h3>Email Support</h3>
                  <div class="overlay">
                    <p>
                      Highly proficient in delivering exceptional email support,
                      ensuring prompt responses and thorough resolution of
                      customer queries with precision and professionalism.
                    </p>
                    <Link to={"/services/email_support"}>Learn More</Link>
                  </div>
                </div>
                <div class="box">
                  <img alt="" src={telephone} />
                  <h3>Telephone Answering</h3>
                  <div class="overlay">
                    <p>
                      Providing seamless communication solutions to ensure each
                      call is handled professionally and leaves a lasting
                      impression on your callers.
                    </p>
                    <Link to={"/services/telephone"}>Learn More</Link>
                  </div>
                </div>
                <div class="box">
                  <img alt="" src={it} />
                  <h3>Outsourced IT Service</h3>
                  <div class="overlay">
                    <p>
                      Delegating information technology operations for a digital
                      transformation gives instant access to helpful resources.
                    </p>
                    <Link to={"/services/it_service"}>Learn More</Link>
                  </div>
                </div>
                <div class="box">
                  <img alt="" src={sales} />
                  <h3>Sales Agents & ISA</h3>
                  <div class="overlay">
                    <p>
                      Dedicated experts, proficient in driving revenue growth
                      through strategic outreach, and nurturing relationships to
                      maximize sales opportunities and client satisfaction.
                    </p>
                    <Link to={"/services/sales_agents"}>Learn More</Link>
                  </div>
                </div>
                <div class="box">
                  <img alt="" src={portal} />
                  <h3>BI Portal</h3>
                  <div class="overlay">
                    <p>
                      Providing intuitive access to comprehensive business
                      intelligence insights, enabling informed strategies and
                      optimized performance across all levels of your
                      organization.
                    </p>
                    <Link to={"/services/bi_portal"}>Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <CallToAction />
    </Container>
  );
};

export default transition(Service);
