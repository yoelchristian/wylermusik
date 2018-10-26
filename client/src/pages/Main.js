import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import Nav from "../components/Nav.js";
import LandingContent from "../components/LandingContent.js";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LandingContent />
      </div>
    )
  }
}

export default withRouter(Main);