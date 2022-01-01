import React, { Component, Fragment } from "react";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";

export default class PortfolioPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Portfolio"></TopNavigation>
        <PageTop pagetitle="Portfolio"></PageTop>
        <AllProjects></AllProjects>
        <Footer></Footer>
      </Fragment>
    );
  }
}
