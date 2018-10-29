import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Card, Row, Col } from 'antd';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
  fontSize: "calc(18px + 1.2vw)",
  letterSpacing: "1.5px",
  color: "black", 
  
}

const FontStyleSubtitle = {
  fontSize: "calc(18px + 0.3vw)",
  color: "black",
  
}

class LandingContent extends Component {
  render() {
    return (
      <div>
        
      <Content style={ ContentStyle }>
        <Row style={{ paddingLeft: "10px" }}>
          <Col xs={24} sm={24} md={14} lg={15} xl={15} xxl={15} style={{ height: "calc(100vh - 85px)", direction: "rtl"}}>
            <video style={{height: "100%", minHeight: "500px", opacity: "0.8", boxShadow: "1px 1px 8px 1px black"}} autoPlay muted loop>
              <source src="https://s3-ap-southeast-1.amazonaws.com/gosyensp/videobw.mp4" type="video/mp4"/>
            </video>
          </Col> 
          <Col xs={24} sm={24} md={10} lg={9} xl={9} xxl={9} style={{ marginTop:"170px", paddingLeft: "50px"}}>
            <p style={ FontStyleTitle }>Lorem ipsum dolor sit amet.</p>
            <p style={ FontStyleSubtitle }>Vivamus a eros a diam sollicitudin congue eget quis dolor.</p>
            <Row gutter={16}>
              <Col span={12}>
                <Button block={true} size="large" ghost style={{color: "pink", borderColor: "pink"}}>Shop Now</Button>
              </Col>
              <Col span={12}>
                <Button block={true} size="large" ghost>Learn More</Button>
              </Col>
            </Row>
          </Col>
          
        </Row>
      </Content>
      </div>
    )
  }
}

export default withRouter(LandingContent);