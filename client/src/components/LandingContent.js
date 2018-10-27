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

const FontStyle = {
  fontSize: "calc(18px + 1.2vw)"
}

class LandingContent extends Component {
  render() {
    return (
      <Content style={ ContentStyle }>
        <Row style={{ paddingLeft: "10px" }}>
          <Col xs={24} sm={24} md={11} lg={10} xl={10} xxl={10} style={{ marginTop:"200px" }}>
            <p style={ FontStyle }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p style={ FontStyle }>Vivamus a eros a diam sollicitudin congue eget quis dolor.</p>
            
          </Col>
          <Col xs={24} sm={24} md={13} lg={14} xl={14} xxl={14} style={{ height: "calc(100vh - 86px)"}}>
          <Row style={{height: "50%"}}>
            <Col span={12}>
              <Card hoverable style={{width: "90%", height: "100%", background: "rgba(255,255,255,0.1)", border: "none"}}>
                <img alt="sample" src={require("../images/wylerlogo-transparent.png")} style={{width:"100%"}}/>
              </Card>
            </Col>
            <Col span={12}>
              <Card hoverable style={{width: "90%", height: "100%", background: "rgba(255,255,255,0.1)", border: "none"}}>
                <img alt="sample" src={require("../images/wylerlogo-transparent.png")} style={{width:"100%"}}/>
              </Card>
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col span={12}>
              <Card hoverable style={{width: "90%", height: "100%", background: "rgba(255,255,255,0.1)", border: "none"}}>
                <img alt="sample" src={require("../images/wylerlogo-transparent.png")} style={{width:"100%"}}/>
              </Card>
            </Col>
            <Col span={12}>
              <Card hoverable style={{width: "90%", height: "100%", background: "rgba(255,255,255,0.1)", border: "none"}}>
                <img alt="sample" src={require("../images/wylerlogo-transparent.png")} style={{width:"100%"}}/>
              </Card>
            </Col>
          </Row>
         </Col>
        </Row>
      </Content>
    )
  }
}

export default withRouter(LandingContent);