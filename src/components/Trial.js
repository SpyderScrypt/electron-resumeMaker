import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/getData";
import { bindActionCreators } from "redux";

class Trial extends Component {
  clickHandler = () => {
    this.props.getData();
  };

  redirectHandler = () => {
    this.props.history.push("/main");
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
        <button onClick={this.redirectHandler}>click</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData: getData
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Trial);
