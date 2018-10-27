import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/LandingPage.js";

const App = () => (
  <div>
    <Router>
      <Route path="/" component={ LandingPage } />
    </Router>
  </div>
);

export default App;
