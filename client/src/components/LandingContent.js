import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

const ContentStyle = {
  boxShadow: "none", 
  maxWidth: "1200px", 
  width: "100%", 
  margin: "20px auto 0", 
  padding: "0 24px", 
  background: "transparent",
}

const FontStyle = {
  fontSize: "calc(18px + 1.2vw)"
}

const MiddleAlign = {
  marginTop: "calc(50vh - 66px)"
}

class LandingContent extends Component {
  render() {
    return (
      <Content style={ ContentStyle }>
        <Row style={{ paddingLeft: "10px" }}>
          <Col xs={24} sm={24} md={11} lg={10} xl={10} xxl={10} style={{ marginTop:"70px" }}>
            <p style={ FontStyle }>Quality. Finish. Tonal BalanceQuality. Finish. Tonal BalanceQuality. Finish. Tonal BalanceQuality. Finish. Tonal BalanceQuality. Finish. Tonal Balance.</p>
            <p style={ FontStyle }>Custom Laser Engravement.</p>
          </Col>
          <Col xs={24} sm={24} md={13} lg={14} xl={14} xxl={14} >
            <p style={ FontStyle }>Quality. Finish. Tonal BalanceQuality. Finish. Tonal BalanceQuality. Finish. Tonal BalanceQuality. Finish. Tonal BalanceQuality. Finish. Tonal Balance.</p>
            <p style={ FontStyle }>Custom Laser Engravement.</p>
          </Col>
        </Row>
      </Content>
    )
  }
}

export default withRouter(LandingContent);