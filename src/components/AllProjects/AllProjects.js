import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AllProjects extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            <Col sm={12} md={6} lg={4} className="p-2">
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/300/300"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/projectDetails" className="btn btn-primary">
                    Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4} className="p-2">
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/100/300/300"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/projectDetails" className="btn btn-primary">
                    Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4} className="p-2">
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/1003/300/300"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/projectDetails" className="btn btn-primary">
                    Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
