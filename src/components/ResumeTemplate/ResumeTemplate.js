import React, { Component } from "react";
import "./stylesheet/style.css";
import { connect } from "react-redux";
const electron = window.require("electron");
const fs = electron.remote.require("fs");
const ipcRenderer = electron.ipcRenderer;

ipcRenderer.on("wrote-pdf", event => {
  document.getElementById("navbar").style.display = "flex";
  document.getElementById("print").style.display = "initial";
});

class ResumeTemplate extends Component {
  printHandler = () => {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("print").style.display = "none";

    ipcRenderer.send("print-to-pdf");
  };

  render() {
    let data = this.props.data;
    console.log(data);

    return (
      <div id="container">
        <div id="resume">
          <div className="name">{data.name}</div>
          <hr className="line" />
          <div className="basic-detail">
            <p className="row">
              <span className="title">Email Id</span> - {data.email}
            </p>
            <p className="row">
              <span className="title">Contact No</span> - {data.phone}
            </p>
            <p className="row">
              <span className="title">Github</span> - {data.github}
            </p>
            <p className="row">
              <span className="title">LinkedIn</span> - {data.linkedin}
            </p>
            <p className="row">
              <span className="title">Address</span> - {data.address}
            </p>
          </div>
          <hr className="line" />
          {/* Education */}
          <div className="education">
            <p className="title">Education</p>
            {data.college.map((item, index) => {
              return (
                <div className="block">
                  <p className="row">
                    <span className="title">College</span> -{" "}
                    {data.college[index]}
                  </p>
                  <p className="row">
                    <span className="title">Passing Year</span> -{" "}
                    {data.year[index]}
                  </p>
                  <p className="row">
                    <span className="title">Percentage/Grade</span> -{" "}
                    {data.percentage[index]}
                  </p>
                </div>
              );
            })}
          </div>
          <hr className="line" />

          {/* Projects */}
          <div className="projects">
            <p className="title">Projects</p>

            {data.projectName.map((item, index) => {
              return (
                <div className="block">
                  <p className="row">
                    <span className="title">Project Name</span> -{" "}
                    {data.projectName[index]}
                  </p>
                  <p className="row">
                    <span className="title">Details</span> -{" "}
                    {data.projectDetail[index]}
                  </p>
                </div>
              );
            })}
          </div>
          <hr className="line" />

          {/* Skills */}
          <div className="skills">
            <p className="title">Skills - </p>
            {data.skills.map(item => {
              return (
                <p className="row">
                  <span className="skill-item">{item}</span>
                </p>
              );
            })}
          </div>
          <hr className="line" />

          {/* Languages */}
          <div className="languages">
            <p className="row">
              <span className="skill-item">Languages - </span> {data.languages}
            </p>
          </div>
        </div>
        <button id="print" className="button" onClick={this.printHandler}>
          Print
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.resumeDataReducer.data
});

export default connect(mapStateToProps)(ResumeTemplate);
