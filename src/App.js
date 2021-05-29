import React, { Component, useState, useRef } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
    }

  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
   Hello World!
      </div>
    );
  }

}


export default hot(module)(App);