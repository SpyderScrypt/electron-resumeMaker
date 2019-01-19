import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import ResumeTemplate from "../components/ResumeTemplate/ResumeTemplate";

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Main} />
          <Route path="/resume" exact component={ResumeTemplate} />
        </div>
      </Router>
    );
  }
}
