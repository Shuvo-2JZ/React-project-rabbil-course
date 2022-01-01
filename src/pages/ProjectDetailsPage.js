import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

export default class PrivacyPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Project Details" />
        <PageTop pagetitle="Project Name" />
        <ProjectDetails></ProjectDetails>
        <Footer />
      </Fragment>
    );
  }
}
