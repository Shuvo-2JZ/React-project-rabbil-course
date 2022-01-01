import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

export default class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container className="topPageContentCourse">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <h3 className="CourseFullTitle">Cast iron block</h3>
                  <p className="CourseSubTitle">Total number of cylinders: 8</p>
                  <p className="CourseSubTitle">
                    Total number of cylinders: 10
                  </p>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <p className="CourseDes">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Car Description</h1>
              <ul>
                <li className="serviceDescription">
                  Toyota Supra has the 3.0 litre 2JZ GTE twin turbo engine
                </li>
                <li className="serviceDescription">
                  Toyota Supra has the 3.0 litre 2JZ GTE twin turbo engine
                </li>
                <li className="serviceDescription">
                  Toyota Supra has the 3.0 litre 2JZ GTE twin turbo engine
                </li>
                <li className="serviceDescription">
                  Toyota Supra has the 3.0 litre 2JZ GTE twin turbo engine
                </li>
                <li className="serviceDescription">
                  Toyota Supra has the 3.0 litre 2JZ GTE twin turbo engine
                </li>
                <li className="serviceDescription">
                  Toyota Supra has the 3.0 litre 2JZ GTE twin turbo engine
                </li>
                <li className="serviceDescription">
                  Toyota Supra has the 3.0 litre 2JZ GTE twin turbo engine
                </li>
              </ul>
              <Button variant="primary">More Details</Button>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <ReactPlayer
                light={false}
                controls
                width="100%"
                url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                playIcon={<Button>Play</Button>}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
