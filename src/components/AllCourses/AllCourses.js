import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Analysis extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">OUR COURSES</h1>
          <Row>
            <Col lg={6} md={12} sm={12} className="p-2">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="courseImg mb-3"
                    src="https://picsum.photos/id/101/300/300"
                    alt=""
                  ></img>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify courseTitle">Web Development</h5>
                  <p className="text-justify courseDes">
                    I build native and cross platfrom mobile app for your
                    business app for your business
                  </p>
                  <Link
                    to="/courseDetails"
                    className="courseDetails float-left"
                  >
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12} className="p-2">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="courseImg mb-3"
                    src="https://picsum.photos/id/1/300/300"
                    alt=""
                  ></img>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify courseTitle">Web Development</h5>
                  <p className="text-justify courseDes">
                    I build native and cross platfrom mobile app for your
                    business app for your business
                  </p>
                  <Link
                    to="/courseDetails"
                    className="courseDetails float-left"
                  >
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={12} sm={12} className="p-2">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="courseImg mb-3"
                    src="https://picsum.photos/id/100/300/300"
                    alt=""
                  ></img>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify courseTitle">Web Development</h5>
                  <p className="text-justify courseDes">
                    I build native and cross platfrom mobile app for your
                    business app for your business
                  </p>
                  <Link
                    to="/courseDetails"
                    className="courseDetails float-left"
                  >
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={12} sm={12} className="p-2">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="courseImg mb-3"
                    src="https://picsum.photos/id/1003/300/300"
                    alt=""
                  ></img>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify courseTitle">Web Development</h5>
                  <p className="text-justify courseDes">
                    I build native and cross platfrom mobile app for your
                    business app for your business
                  </p>
                  <Link
                    to="/courseDetails"
                    className="courseDetails float-left"
                  >
                    Details
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
