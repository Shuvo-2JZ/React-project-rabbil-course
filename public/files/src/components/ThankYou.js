import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import "../assets/css/bootstrap.min.css";
import "../assets/css/custom.css";
import idlcLogo from "../assets/image/IDLC_Logo.svg";
import checkMark from "../assets/image/checkMark.svg";

export default class ThankYou extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBackground">
                    <Container fluid={true} className="container-background pt-5">
                        <Row>
                            <Col lg={12} md={12} sm={12} className="text-center mt-4">
                                <img src={[idlcLogo]} alt="No logo"></img>
                                <h2 className="top-header-font">IDLC Digital Deposit</h2>
                                <p className="top-header-description">Customer Feedback</p>
                            </Col>
                        </Row>
                        <Row>
                            <Container className="shadow p-5 mb-5">
                                <Row className="mt-4 mb-4">
                                    <Col lg={12} md={12} sm={12} className="text-center">
                                        <img src={[checkMark]} alt="No logo"></img>
                                    </Col>
                                </Row>

                                <hr className="hr-half-width"></hr>
                                
                                <Row className="mb-5 mt-4">
                                    <Col lg={12} md={12} sm={12} className="text-center">
                                        <p className="thankyou-font paragraph-margin">Thank You</p>
                                        <p className="thankyou-font paragraph-margin">Bruce Wayne</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
