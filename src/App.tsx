import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Display />
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
