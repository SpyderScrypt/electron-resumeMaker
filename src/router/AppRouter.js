import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Trial from "../components/Trial";
import Main from "../components/Main/Main";

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Main} />
          <Route path="/main"  component={Trial} />
        </div>
      </Router>
    );
  }
}
