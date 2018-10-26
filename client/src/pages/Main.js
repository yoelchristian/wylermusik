import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import Nav from "../components/Nav.js";

class Main extends Component {
  render() {
    return (
      <Nav />
    )
  }
}

export default withRouter(Main);