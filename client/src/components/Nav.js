import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

class Nav extends Component {
  render() {
    return (
      <Header style={{boxShadow:"none", maxWidth:"1200px", width:"100%", margin:"20px auto 0", padding:"0 24px"}}>

        <img className="list-inline" src="https://via.placeholder.com/100" style={{float: "left"}}></img>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1dqwdwqdwqdwqdwqdwqdqwdqwdqdwqd</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>

      </Header>   
    )
  }
}

export default withRouter(Nav);