import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <Container fluid="true">
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: "#000" }}
      >
        <section
          class="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#000" }}
        ></section>
        <section>
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold white">Triton COnsultancy</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(155, 132, 76)",
                    height: "2px",
                  }}
                />
                <p>
                  Triton consultancy is a 360 degree business process outsource
                  and full-lifecycle software Development Company.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold white">Services</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(155, 132, 76)",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="/" class="text-white">
                    US Campaigns
                  </a>
                </p>
                <p>
                  <a href="/" class="text-white">
                    Global Real-Estate
                  </a>
                </p>
                <p>
                  <a href="/" class="text-white">
                    Automobile
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold white">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(155, 132, 76)",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="/" class="text-white">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    POS-IOS Program
                  </a>
                </p>
                <p>
                  <a href="/Contact" class="text-white">
                    Contact Us
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold white">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(155, 132, 76)",
                    height: "2px",
                  }}
                />
                <p>
                  <i class="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-3" style={{ backgroundColor: "#000" }}>
          © 2020 Copyright:
          <a
            class="text-white"
            href="https://www.instagram.com/hassaan_uddin_sheikh/?hl=en"
          >
            Hassaan Uddin Sheikh
          </a>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
