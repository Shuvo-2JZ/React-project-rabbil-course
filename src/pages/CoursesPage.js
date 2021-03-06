import React, { Component, Fragment } from "react";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/AllCourses/AllCourses";

export default class CoursesPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Courses"></TopNavigation>
        <PageTop pagetitle="All Courses"></PageTop>
        <AllCourses></AllCourses>
        <Footer></Footer>
      </Fragment>
    );
  }
}
