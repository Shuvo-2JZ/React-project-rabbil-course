import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default class Analysis extends Component {
  state = {
    data: [
      // each object is a bar
      {
        Technology: "Java", // x-axis
        Projects: 100 // y-axis
      },
      {
        Technology: "Kotlin",
        Projects: 40
      },
      {
        Technology: "SQL",
        Projects: 90
      },
      {
        Technology: "Bootstrap",
        Projects: 95
      },
      {
        Technology: "JQuery",
        Projects: 60
      },
      {
        Technology: "React",
        Projects: 90
      },
      {
        Technology: "PHP",
        Projects: 100
      },
      {
        Technology: "Angular",
        Projects: 65
      }
    ]
  };

  render() {
    var blue = "rgba(0, 115, 230, 0.8)";

    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Technology Used</h1>
          <Row>
            <Col
              style={{ width: "100%", height: "300px" }}
              lg={6}
              md={12}
              sm={12}
            >
              {/* setting the col width and height will not work.
                we have to make the barchart responsive */}
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology"></XAxis>
                  <Tooltip></Tooltip>
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="text-justify des">
                Consectetur aute cillum commodo do nostrud occaecat fugiat
                cillum proident incididunt officia est. Do consectetur ipsum ea
                laborum sunt minim labore consectetur enim fugiat nulla tempor
                cupidatat. Non qui exercitation fugiat tempor non in. Amet id
                dolor ad eu cupidatat et nostrud reprehenderit ea ullamco culpa
                eiusmod. Commodo veniam in cupidatat Lorem ad. Consectetur aute
                cillum commodo do nostrud occaecat fugiat cillum proident
                incididunt officia est. Do consectetur ipsum ea laborum sunt
                minim labore consectetur enim fugiat nulla tempor cupidatat. Non
                qui exercitation fugiat tempor non in. Amet id dolor ad eu
                cupidatat et nostrud reprehenderit ea ullamco culpa eiusmod.
                Commodo veniam in cupidatat Lorem ad.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
