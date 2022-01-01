import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundSection from "../components/RefundSection/RefundSection";
import Footer from "../components/Footer/Footer";

export default class RefundPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund"></TopNavigation>
        <PageTop pagetitle="Refund Policy" />
        <RefundSection></RefundSection>
        <Footer />
      </Fragment>
    );
  }
}
