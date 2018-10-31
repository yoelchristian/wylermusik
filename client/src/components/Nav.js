import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import "./Nav.css";

const { Header, Content, Footer } = Layout;

const HeaderStyle = {
  boxShadow: "none", 
  maxWidth: "1200px", 
  width: "100%", 
  margin: "0px auto 0", 
  padding: "0 24px", 
  background: "transparent",
}

const LogoStyle = {
  float: "left", 
  height: "64px",
  width: "auto", 
  marginRight: "15px",
  marginTop: "5px"
}

const LogoTextStyle = {
  display: "inline", 
  fontFamily: "Merriweather", 
  borderLeft: "1px solid #989a9e", 
  paddingLeft: "15px", 
  fontSize: "1.5em",
  letterSpacing: "1.7px",
  textShadow: "1px 1px 4px #aaa",
  color: "black"
}

class Nav extends Component {
  render() {
    return (
      <Header style={ HeaderStyle }>
        <Row style={{ marginBottom: "20px" }}>
          <Col xs={24} sm={24} md={11} lg={9} xl={9} xxl={8}>
            <a href="/">
              <img alt="logo" src={require("../images/wylerlogo-transparent.png")} style={ LogoStyle }></img>
              <span style={ LogoTextStyle }>Wyler Instruments</span>
            </a>      
          </Col>
          <Col xs={0} sm={0} md={13} lg={15} xl={15} xxl={16} style={{ height: "66px" }}>
            
          </Col>
        </Row>
      </Header>
    )
  }
}

export default withRouter(Nav);