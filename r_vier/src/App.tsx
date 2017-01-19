import * as React from "react";

const style = require("./App.css");
const logo = require("./logo.svg");

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React r_vier</h2>
        </div>
      </div>
    );
  }
}

