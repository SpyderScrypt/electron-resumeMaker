import React, { Component } from "react";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";

const electron = window.require("electron");
const fs = electron.remote.require("fs");
const ipcRenderer = electron.ipcRenderer;

class App extends Component {
  state = {
    name: null
  };

  componentDidMount() {
    // Communication tutorial basic
    ipcRenderer.on("todo:add", (event, todo) => {
      console.log(todo, "Data received from electron in react");
      this.setState({ name: todo });
    });

    ipcRenderer.send("todo:add", "Akash");
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
