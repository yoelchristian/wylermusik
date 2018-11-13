import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Card, Row, Col } from 'antd';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const ContentStyle = {
  boxShadow: "none", 
  maxWidth: "1400px", 
  width: "100%", 
  margin: "0px auto 0", 
  padding: "0 12px", 
  background: "transparent",
  height: "100%"
}

const FontStyleTitle = {
  fontSize: "calc(18px + 1.2vw)",
  letterSpacing: "1.5px",
  color: "black", 
  textShadow: "1.5px 1.5px 5px #aaa",
}

const FontStyleSubtitle = {
  fontSize: "calc(18px + 0.3vw)",
  color: "black",
  textShadow: "1.5px 1.5px 5px #aaa",
}

const shopPage = () => {
  window.location.href = "http://shop.wyler.id"
}

class LandingContent extends Component {

  render() {
    return (
      <div>
        
      <Content style={ ContentStyle }>
        <Row>
          <Col id="vidCol" xs={24} sm={24} md={24} lg={24} xl={14} xxl={14} style={{direction: "rtl"}}>
            <video className="vidObject" style={{height: "100%", opacity: "0.8", boxShadow: "1px 1px 8px 2px #aaa"}} autoPlay muted loop>
              <source src="https://s3-ap-southeast-1.amazonaws.com/gosyensp/videobw.mp4" type="video/mp4"/>
            </video>
          </Col> 
          <Col xs={24} sm={24} md={24} lg={24} xl={10} xxl={10} className="textContainer">
          <div className="introText">
            <p style={ FontStyleTitle }>Lorem ipsum dolor sit amet.</p>
            <p style={ FontStyleSubtitle }>Vivamus a eros a diam sollicitudin congue eget quis dolor.</p>
            <Row gutter={16}>
              <Col span={12}>
                <Button onClick={() => shopPage()} block={true} size="large" className="shopNow">SHOP NOW</Button>
              </Col>
              <Col span={12}>
                <Button block={true} size="large" className="learnMore">Learn More</Button>
              </Col>
            </Row>
          </div>
          </Col>
        </Row>
      </Content>
      </div>
    )
  }
}

export default withRouter(LandingContent);