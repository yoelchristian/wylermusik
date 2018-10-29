import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import Nav from "../components/Nav.js";
import LandingContent from "../components/LandingContent.js";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
      <div className="backgroundCover">
        <Nav />
        <LandingContent />
      </div>
      </div>
    )
  }
}

export default withRouter(LandingPage);