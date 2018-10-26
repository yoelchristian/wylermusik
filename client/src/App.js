import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from "./pages/Main.js";

const App = () => (
  <div>
    <Router>
      <Route path="/" component={ Main } />
    </Router>
  </div>
);

export default App;
