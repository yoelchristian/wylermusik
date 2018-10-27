import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Card, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const ContentStyle = {
  boxShadow: "none", 
  maxWidth: "1200px", 
  width: "100%", 
  margin: "20px auto 0", 
  padding: "0 24px", 
  background: "transparent",
}

const FontStyleTitle = {
  fontSize: "calc(18px + 1.2vw)"
}

const FontStyleSubtitle = {
  fontSize: "calc(18px + 0.3vw)"
}

class LandingContent extends Component {
  render() {
    return (
      <Content style={ ContentStyle }>
        <Row style={{ paddingLeft: "10px" }}>
          <Col xs={24} sm={24} md={11} lg={10} xl={10} xxl={10} style={{ marginTop:"170px" }}>
            <p style={ FontStyleTitle }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p style={ FontStyleSubtitle }>Vivamus a eros a diam sollicitudin congue eget quis dolor.</p>
            
          </Col>
          <Col xs={24} sm={24} md={13} lg={14} xl={14} xxl={14} style={{ height: "calc(100vh - 100px)"}}>
            <video style={{height: "100%", opacity: "0.4", boxShadow: "2px 1px 3px 2px black"}} autoPlay muted loop>
              <source src="https://s3-ap-southeast-1.amazonaws.com/gosyensp/video.mp4" type="video/mp4"/>
            </video>
          </Col>
        </Row>
      </Content>
    )
  }
}

export default withRouter(LandingContent);