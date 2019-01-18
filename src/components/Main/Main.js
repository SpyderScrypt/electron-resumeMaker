import React, { Component } from "react";
import "./stylesheet/style.css";
import { connect } from "react-redux";
import { sendData } from "../../actions/sendData";
import { bindActionCreators } from "redux";

class Main extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    languages: "",
    skills: [""],
    college: [""],
    year: [""],
    percentage: [""],
    projectName: [""],
    projectDetail: [""]
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  dynamicInputHandler = (e, index) => {
    var targetName = e.target.name;

    var values = [...this.state[targetName]];
    values[index] = e.target.value;
    this.setState({
      [targetName]: values
    });
  };

  addHandler = (e, index) => {
    e.preventDefault();
    let targetName = e.target.parentElement.name;
    if (targetName == "education") {
      let newCollege = [...this.state.college];
      let newYear = [...this.state.year];
      let newPercentage = [...this.state.percentage];
      newCollege.push("");
      newYear.push("");
      newPercentage.push("");
      this.setState({
        college: newCollege,
        year: newYear,
        percentage: newPercentage
      });
    } else if (targetName == "project") {
      let newProjectName = [...this.state.projectName];
      let newProjectDetail = [...this.state.projectDetail];
      newProjectName.push("");
      newProjectDetail.push("");
      this.setState({
        projectName: newProjectName,
        projectDetail: newProjectDetail
      });
    } else {
      let values = [...this.state[targetName]];
      values.push("");
      this.setState({
        [targetName]: values
      });
    }
  };

  removeHandler = (e, index) => {
    e.preventDefault();
    let targetName = e.target.parentElement.name;

    if (targetName == "education") {
      let newCollege = [...this.state.college];
      let newYear = [...this.state.year];
      let newPercentage = [...this.state.percentage];
      newCollege.splice(index, 1);
      newYear.splice(index, 1);
      newPercentage.splice(index, 1);

      this.setState({
        college: newCollege,
        year: newYear,
        percentage: newPercentage
      });
    } else if (targetName == "project") {
      let newProjectName = [...this.state.projectName];
      let newProjectDetail = [...this.state.projectDetail];
      newProjectName.splice(index, 1);
      newProjectDetail.splice(index, 1);
      this.setState({
        projectName: newProjectName,
        projectDetail: newProjectDetail
      });
    } else {
      let values = [...this.state[targetName]];

      values.splice(index, 1);
      this.setState({
        [targetName]: values
      });
    }
  };

  sendDataHandler = e => {
    var status = document.getElementById("resumeForm").checkValidity();
    if (status == true) {
      e.preventDefault();
    }
    this.props.sendData(this.state);
  };

  render() {
    console.log(this.state.languages);

    return (
      <div>
        <form className="form" id="resumeForm">
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
                <div className="close">
                  <span>
                    <a
                      href
                      name="skills"
                      onClick={e => {
                        this.removeHandler(e, index);
                      }}
                    >
                      <i className="fa fa-times fa-2x" />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
          <a
            href
            name="skills"
            onClick={e => {
              this.addHandler(e);
            }}
          >
            <i class="fa fa-plus-circle fa-2x" aria-hidden="true" />
          </a>

          {/* Education */}
          {this.state.college.map((value, index) => {
            return (
              <div className="input-row row">
                <div className="dynamic-input">
                  <input
                    type="text"
                    placeholder="Enter College/University Name"
                    name="college"
                    onChange={e => {
                      this.dynamicInputHandler(e, index);
                    }}
                    value={this.state.college[index]}
                  />
                  <input
                    type="text"
                    placeholder="Enter Passing Year"
                    name="year"
                    onChange={e => {
                      this.dynamicInputHandler(e, index);
                    }}
                    value={this.state.year[index]}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Enter Latest Percentage/Pointer/Grade"
                    name="percentage"
                    onChange={e => {
                      this.dynamicInputHandler(e, index);
                    }}
                    value={this.state.percentage[index]}
                    required={true}
                  />
                </div>
                <div className="close">
                  <span>
                    <a
                      href
                      name="education"
                      onClick={e => {
                        this.removeHandler(e, index);
                      }}
                    >
                      <i className="fa fa-times fa-2x" />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
          <a
            href
            name="education"
            onClick={e => {
              this.addHandler(e);
            }}
          >
            <i class="fa fa-plus-circle fa-2x" aria-hidden="true" />
          </a>

          {/* Projects */}
          {this.state.projectName.map((value, index) => {
            return (
              <div className="input-row row">
                <div className="dynamic-input">
                  <input
                    type="text"
                    placeholder="Enter Project Name"
                    name="projectName"
                    onChange={e => {
                      this.dynamicInputHandler(e, index);
                    }}
                    value={this.state.projectName[index]}
                  />
                  <input
                    type="text"
                    placeholder="Enter Project Details/Links"
                    name="projectDetail"
                    onChange={e => {
                      this.dynamicInputHandler(e, index);
                    }}
                    value={this.state.projectDetail[index]}
                  />
                </div>
                <div className="close">
                  <span>
                    <a
                      href
                      name="project"
                      onClick={e => {
                        this.removeHandler(e, index);
                      }}
                    >
                      <i className="fa fa-times fa-2x" />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
          <a
            href
            name="project"
            onClick={e => {
              this.addHandler(e);
            }}
          >
            <i class="fa fa-plus-circle fa-2x" aria-hidden="true" />
          </a>
          {/* Languages Known */}
          <div className="input-row">
            <input
              type="text"
              name="languages"
              onChange={this.inputHandler}
              value={this.state.languages}
              placeholder="Enter Languages Known"
            />
          </div>
          {/* <a class="button" onClick={this.sendDataHandler}>
            Submit
          </a> */}
          <input
            class="button"
            type="submit"
            value="Submit"
            onClick={this.sendDataHandler}
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendData: sendData
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(Main);
