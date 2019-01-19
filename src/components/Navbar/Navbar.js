import React, { Component } from "react";
import "./stylesheet/style.css";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  clickhandler = () => {
    window.open(
      "https://github.com/SpyderScrypt/electron-resume-maker",
      "SpyderScrypt",
      "nodeIntegration=no"
    );
  };

  backHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div id="navbar" className="navbar-container">
        <div className="back-button" onClick={this.backHandler}>
          <i className="fa fa-arrow-left" />
        </div>
        <div className="title">
          <span className="title-content">Resume Maker</span>
        </div>
        <div className="logo" onClick={this.clickhandler}>
          <i className="fa fa-github" />
          <span className="logo-text">Github</span>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);
