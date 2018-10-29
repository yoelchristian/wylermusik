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
}

const LogoTextStyle = {
  display: "inline", 
  fontFamily: "Merriweather", 
  borderLeft: "1px solid #989a9e", 
  paddingLeft: "15px", 
  fontSize: "1.5em",
  letterSpacing: "1.7px",
  textShadow: "1.5px 1.5px 5px #aaa",
  color: "black"
}

const MenuStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
}

const MenuItemStyle = {
  float: "right",
  fontSize: "1.55em",
  color: "black ",
  marginTop: "7px",
  
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
            <Menu mode="horizontal" style={ MenuStyle }>
              <Menu.Item style={ MenuItemStyle } key="2" push>About Us</Menu.Item>
              <Menu.Item style={ MenuItemStyle } key="1">Home</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default withRouter(Nav);