import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Card, Row, Col } from 'antd';
import Nav from "../components/Nav.js";
import LandingContent from "../components/LandingContent.js";
import "./LandingPage.css";

class LandingPage extends Component {
  componentDidMount() {
    setTimeout( () => {
      const ele = document.getElementById('loadingScreen')
      ele.classList.add('remove')
    }, 1000)
  }

  render() {
    return (
      <div className="backgroundA">
      <div className="landingPage">
      <div className="backgroundOverlay">
        <Nav />
        <LandingContent />
      </div>
      </div>
      <div style={{width: "1600px", margin:"auto"}} className="content1 container">
        <Row gutter={16}>
          <Col span={8}>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id imperdiet nunc, non interdum magna. Fusce placerat ligula nec lectus condimentum, sit amet dapibus ante pharetra. Maecenas bibendum congue felis suscipit euismod. Curabitur lacinia ex urna, sed vestibulum neque sodales sit amet. Aliquam nibh orci, tempor non gravida eget, blandit ut ligula. Nulla luctus diam vitae justo vulputate, vel volutpat lectus tincidunt. Donec volutpat consectetur lectus at lacinia. Cras dignissim ipsum neque, et eleifend arcu tempor sed.
              Donec eget mattis nisl. Vivamus in mauris in lectus rutrum porttitor. Sed sagittis viverra faucibus. Aliquam vehicula sapien tempor mauris rhoncus, nec interdum nibh pellentesque. In hac habitasse platea dictumst. Cras molestie ipsum nunc, in convallis ligula ultrices lacinia. Sed volutpat quam tellus, sit amet interdum lacus faucibus eget. Donec suscipit, metus eu dictum fringilla, ligula ex pretium neque, eu dictum turpis erat egestas tortor. Etiam in elit sagittis, commodo metus in, vestibulum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              Sed ultrices dolor nec ligula condimentum, sed viverra libero interdum. Maecenas non mi at velit posuere convallis. Nulla facilisi. Sed posuere felis eu felis interdum tincidunt. Phasellus finibus vitae purus sit amet volutpat. Ut congue sit amet nisl vel tempus. Nunc imperdiet pellentesque finibus. Quisque scelerisque tortor vel quam laoreet, a ullamcorper orci rutrum. Ut eget velit fermentum, tincidunt dolor et, dictum diam. Sed massa turpis, venenatis et dolor nec, finibus placerat sem. Morbi justo velit, aliquam at viverra id, molestie a tortor. Cras porttitor lacinia libero, eu luctus mauris hendrerit ac.
            </h3>
          </Col>
          <Col span={8}>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id imperdiet nunc, non interdum magna. Fusce placerat ligula nec lectus condimentum, sit amet dapibus ante pharetra. Maecenas bibendum congue felis suscipit euismod. Curabitur lacinia ex urna, sed vestibulum neque sodales sit amet. Aliquam nibh orci, tempor non gravida eget, blandit ut ligula. Nulla luctus diam vitae justo vulputate, vel volutpat lectus tincidunt. Donec volutpat consectetur lectus at lacinia. Cras dignissim ipsum neque, et eleifend arcu tempor sed.
              Donec eget mattis nisl. Vivamus in mauris in lectus rutrum porttitor. Sed sagittis viverra faucibus. Aliquam vehicula sapien tempor mauris rhoncus, nec interdum nibh pellentesque. In hac habitasse platea dictumst. Cras molestie ipsum nunc, in convallis ligula ultrices lacinia. Sed volutpat quam tellus, sit amet interdum lacus faucibus eget. Donec suscipit, metus eu dictum fringilla, ligula ex pretium neque, eu dictum turpis erat egestas tortor. Etiam in elit sagittis, commodo metus in, vestibulum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              Sed ultrices dolor nec ligula condimentum, sed viverra libero interdum. Maecenas non mi at velit posuere convallis. Nulla facilisi. Sed posuere felis eu felis interdum tincidunt. Phasellus finibus vitae purus sit amet volutpat. Ut congue sit amet nisl vel tempus. Nunc imperdiet pellentesque finibus. Quisque scelerisque tortor vel quam laoreet, a ullamcorper orci rutrum. Ut eget velit fermentum, tincidunt dolor et, dictum diam. Sed massa turpis, venenatis et dolor nec, finibus placerat sem. Morbi justo velit, aliquam at viverra id, molestie a tortor. Cras porttitor lacinia libero, eu luctus mauris hendrerit ac.
            </h3>
          </Col><Col span={8}>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id imperdiet nunc, non interdum magna. Fusce placerat ligula nec lectus condimentum, sit amet dapibus ante pharetra. Maecenas bibendum congue felis suscipit euismod. Curabitur lacinia ex urna, sed vestibulum neque sodales sit amet. Aliquam nibh orci, tempor non gravida eget, blandit ut ligula. Nulla luctus diam vitae justo vulputate, vel volutpat lectus tincidunt. Donec volutpat consectetur lectus at lacinia. Cras dignissim ipsum neque, et eleifend arcu tempor sed.
              Donec eget mattis nisl. Vivamus in mauris in lectus rutrum porttitor. Sed sagittis viverra faucibus. Aliquam vehicula sapien tempor mauris rhoncus, nec interdum nibh pellentesque. In hac habitasse platea dictumst. Cras molestie ipsum nunc, in convallis ligula ultrices lacinia. Sed volutpat quam tellus, sit amet interdum lacus faucibus eget. Donec suscipit, metus eu dictum fringilla, ligula ex pretium neque, eu dictum turpis erat egestas tortor. Etiam in elit sagittis, commodo metus in, vestibulum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              Sed ultrices dolor nec ligula condimentum, sed viverra libero interdum. Maecenas non mi at velit posuere convallis. Nulla facilisi. Sed posuere felis eu felis interdum tincidunt. Phasellus finibus vitae purus sit amet volutpat. Ut congue sit amet nisl vel tempus. Nunc imperdiet pellentesque finibus. Quisque scelerisque tortor vel quam laoreet, a ullamcorper orci rutrum. Ut eget velit fermentum, tincidunt dolor et, dictum diam. Sed massa turpis, venenatis et dolor nec, finibus placerat sem. Morbi justo velit, aliquam at viverra id, molestie a tortor. Cras porttitor lacinia libero, eu luctus mauris hendrerit ac.
            </h3>
          </Col>
        </Row>
      </div>
      </div>
    )
  }
}

export default withRouter(LandingPage);