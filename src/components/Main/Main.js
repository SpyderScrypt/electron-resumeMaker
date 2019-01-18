import React, { Component } from "react";
import "./stylesheet/style.css";

export default class Main extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: [""]
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  dynamicInputHandler = (e, index) => {
    var targetName = e.target.name;
    console.log(targetName);

    var values = [...this.state[targetName]];
    values[index] = e.target.value;
    this.setState({
      [targetName]: values
    });
  };

  addHandler = (e, index) => {
    e.preventDefault();
    let targetName = e.target.name;
    let values = [...this.state[targetName]];
    values.push("");
    this.setState({
      [targetName]: values
    });
  };

  removeHandler = (e, index) => {
    e.preventDefault();
    let targetName = e.target.name;
    console.log(e.target.name);

    // let values = [...this.state[targetName]];

    // values.splice(index, 1);
    // this.setState({
    //   [targetName]: values
    // });
  };

  render() {
    return (
      <div>
        <form className="form">
          <div className="input-row">
            <input
              type="text"
              name="name"
              onChange={this.inputHandler}
              value={this.state.name}
              placeholder="Enter Name"
            />
          </div>
          <div className="input-row">
            <input
              type="text"
              name="address"
              onChange={this.inputHandler}
              value={this.state.address}
              placeholder="Enter Address"
            />
          </div>
          <div className="input-row">
            <input
              type="email"
              name="email"
              onChange={this.inputHandler}
              value={this.state.email}
              placeholder="Enter Email Id"
            />
          </div>
          <div className="input-row">
            <input
              type="number"
              name="phone"
              onChange={this.inputHandler}
              value={this.state.phone}
              placeholder="Enter Contact No"
            />
          </div>
          <div className="input-row">
            <input
              type="text"
              name="linkedin"
              onChange={this.inputHandler}
              value={this.state.linkedin}
              placeholder="Enter LinkedIn Url"
            />
          </div>
          <div className="input-row">
            <input
              type="text"
              name="github"
              onChange={this.inputHandler}
              value={this.state.github}
              placeholder="Enter Github URL"
            />
          </div>
          {this.state.skills.map((value, index) => {
            return (
              <div className="input-row row">
                <div className="dynamic-input">
                  <input
                    type="text"
                    placeholder="Enter skill"
                    name="skills"
                    onChange={e => {
                      this.dynamicInputHandler(e, index);
                    }}
                    value={this.state.skills[index]}
                  />
                </div>
                <div>
                  <span>
                    <a
                      name="skills"
                      className="close"
                      onClick={e => {
                        this.removeHandler(e, index);
                      }}
                    >
                      <i>Remove</i>
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
          <button
            name="skills"
            onClick={e => {
              this.addHandler(e);
            }}
          >
            Add
          </button>
        </form>
        {this.state.skills[0]}
      </div>
    );
  }
}
