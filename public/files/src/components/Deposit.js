import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import "../assets/css/bootstrap.min.css";
import "../assets/css/custom.css";
import idlcLogo from "../assets/image/IDLC_Logo.svg";
import proPicLogo from "../assets/image/proPicLogo.svg";
import squareLogo from "../assets/image/squareLogo.svg";


export default class Deposit extends Component {
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
                            <Container className="shadow p-5">
                                <Row className="mt-4">
                                    <Col lg={8} md={8} sm={8}>
                                        <Row>
                                            <Col lg={2} md={2} sm={2}>
                                                <img src={[proPicLogo]} alt="No logo" ></img>
                                            </Col>
                                            <Col lg={10} md={10} sm={10}>
                                                <h3 className="top-header-font ml-2">Bruce Wayne</h3>
                                                <p className="user-info-font ml-2">
                                                    Sunt elit qui consectetur cillum consequat. Ex ut ut magna
                                                    velit duis aliqua consectetur occaecat velit proident laborum veniam ut ex.
                                                    Consequat ex qui ut quis nostrud irure dolor. Proident labore qui nisi ea
                                                    minim.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={4} md={4} sm={4} className="text-enter">
                                        {/* <Row>
                                            <Col lg={1} md={1} sm={1} className="vertical-line">
                                                
                                            </Col>
                                            <Col lg={11} md={11} sm={11}>
                                                <p className="deposit-digit">৳ 100,000</p>
                                                <p className="deposit-amount">Deposit Amount</p>
                                            </Col>
                                        </Row> */}
                                        <div className="vertical-line">
                                            <p className="deposit-digit ml-4">৳ 100,000</p>
                                            <p className="deposit-amount ml-4 ">Deposit Amount</p>
                                        </div>
                                    </Col>
                                </Row>

                                <hr></hr>

                                <Row>
                                    <Col lg={12} md={12} sm={12}>
                                        <p className="fontStyle font-alignment"> <img src={[squareLogo]} alt="No logo" className="mr-2"></img> Whether FI has charged any extra fee (maintenance fee/ others) which was not
                                            mentioned in the agreement?</p>
                                        {/* <Row className="padding-0">
                                        <Col lg={1} md={1} sm={1} className="padding-0">
                                            <img src={[squareLogo]} alt="No logo" className="mr-2"></img>
                                        </Col>
                                        <Col lg={11} md={11} sm={11} className="padding-0">
                                            <p className="fontStyle">Whether FI has charged any extra fee (maintenance fee/ others) which was not
                                                mentioned in the agreement?</p>
                                        </Col>
                                    </Row> */}
                                    </Col>
                                </Row>

                                <Row >
                                    <Col lg={12} md={12} sm={12}>
                                        <Form>
                                            <Form.Group >
                                                <Row className="mb-3">
                                                    <Col lg={1} md={1} sm={1}>
                                                        <Form.Check
                                                            value=""
                                                            type="radio"
                                                            aria-label="radio 2"
                                                            label="YES"
                                                            className="font-checkbox"
                                                        />
                                                    </Col>
                                                    <Col lg={1} md={1} sm={1}>
                                                        <Form.Check
                                                            value=""
                                                            type="radio"
                                                            aria-label="radio 2"
                                                            label="NO"
                                                            className="font-checkbox"
                                                        />
                                                    </Col>
                                                </Row>
                                                <Form.Label className="fontStyle">What is the reason?</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>
                                            <Button className="customButton mt-4" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
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
