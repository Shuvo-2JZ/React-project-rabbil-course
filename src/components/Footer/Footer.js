import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="text-center footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Follow Me</h1>
              <a className="socialLink" href="#">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <br />
              <a className="socialLink" href="#">
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </a>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Address</h1>
              <p className="serviceDescription">
                South Shahjahanpur, Railway Officer's Club, Dhaka
              </p>
              <p className="serviceDescription">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> shuvowayne90@gmail.com
              </p>
              <p className="serviceDescription">
                {" "}
                <FontAwesomeIcon icon={faPhone} /> +8801557683372
              </p>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Information</h1>
              <Link to="/about" className="footerLink">
                About Me
              </Link>
              <br />
              <a className="footerLink" href="#">
                My Resume
              </a>
              <br />
              <Link to="/contact" className="footerLink">
                Contact Me
              </Link>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Legal</h1>
              <Link to="/refund" className="footerLink">
                Refund Policy
              </Link>
              <br />
              <Link to="/terms" className="footerLink">
                Terms and Condition
              </Link>
              <br />
              <Link to="/privacy" className="footerLink">
                Privacy Policy
              </Link>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="text-center copyrightSection">
          <a className="copyrightLink" href="#">
            steam.com &copy; 2020-2021
          </a>
        </Container>
      </Fragment>
    );
  }
}
