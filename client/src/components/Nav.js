import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import "./Nav.css";

const { Header, Content, Footer } = Layout;

class Nav extends Component {
  render() {
    return (
      <Header className="headerStyle">
      <div className="logoHeader">
        <a href="/">
          <img alt="logo" src={require("../images/wylerlogo-transparent.png")} className="logoStyle"></img>
          <span className="logoTextStyle">Wyler Instruments</span>
        </a>
      </div>      
      </Header>
    )
  }
}

export default withRouter(Nav);