import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import whiteLogo from "../../asset/image/navlogo.svg";
import blueLogo from "../../asset/image/navlogoScroll.svg";
import { NavLink } from "react-router-dom";

export default class TopNavigation extends Component {
  state = {
    navBarTitle: "navTitle",
    navBarLogo: [whiteLogo],
    navVariant: "dark",
    navBarBackground: "navBackground",
    navBarItem: "navItem",
    pageTitle: this.props.title
  };

  onScroll = () => {
    if (window.scrollY > 100) {
      // scrolling down
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: [blueLogo],
        navBarBackground: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVariant: "light"
      });
    } else if (window.scrollY < 100) {
      // scrolling up
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: [whiteLogo],
        navBarBackground: "navBackground",
        navBarItem: "navItem",
        navVariant: "dark"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.navBarBackground}
          expand="lg"
          fixed="top"
          collapseOnSelect
          variant={this.state.navVariant}
        >
          <Navbar.Brand>
            <NavLink className={this.state.navBarTitle} to="/">
              <img src={this.state.navBarLogo} alt="No logo"></img> Nissan GTR
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link>
                <NavLink
                  to="/"
                  className={this.state.navBarItem}
                  activeStyle={{ color: "#00a8ee" }}
                >
                  HOME
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/service" className={this.state.navBarItem}>
                  SERVICES
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/course" className={this.state.navBarItem}>
                  COURSES
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/portfolio" className={this.state.navBarItem}>
                  PORTFOLIO
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contact" className={this.state.navBarItem}>
                  CONTACT
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about" className={this.state.navBarItem}>
                  ABOUT
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
