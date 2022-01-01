import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class RefundSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col sm={12} lg={12} md={12}>
              <ul>
                <li>First 30 days money back</li>
                <li>THIS IS NOT A SMASH AND GRAB JOB</li>
                <li>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </li>
                <li>
                  After 30 days, money laundering procedure will be started
                </li>
                <li>
                  Don't let yourself get attached to anything you are not
                  willing to walk out on in 30 seconds flat if you feel the heat
                  around the corner
                </li>
                <li>
                  Tell me where the trigger is. Then, you have my permission to
                  die.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
