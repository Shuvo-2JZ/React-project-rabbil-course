import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img alt="" src="https://picsum.photos/id/237/500/500"></img>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h2 className="serviceName">Foll Bazzar</h2>
              <p className="serviceDescription">
                Complete e-commerce app solution for selling fruit online.
                According to build quality, data loading speed this is the best
                one{" "}
              </p>
              <ul>
                <li className="serviceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="serviceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="serviceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="serviceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="serviceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="serviceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="serviceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
              </ul>
              <Button variant="primary">More Info</Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
