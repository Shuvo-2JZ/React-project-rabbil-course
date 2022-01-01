import React, { Component, Fragment } from "react";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import ContactSection from "../components/ContactSection/ContactSection";

export default class ServicetPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Services"></TopNavigation>
        <PageTop pagetitle="Services"></PageTop>
        <Services></Services>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </Fragment>
    );
  }
}
