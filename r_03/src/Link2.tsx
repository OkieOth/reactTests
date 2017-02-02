import * as React from "react";
import { Link } from "react-router";

const style = require("./App.css");
const logo = require("./logo.svg");

export default class Link2 extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I'm Link-2</h1>
        </div>
        <ul>
            <li>
                <Link to='/'>Back to root</Link>
            </li>
            <li>
                <Link to='/link1'>Link-1</Link>
            </li>
            <li>
                already there
            </li>
            <li>
                <Link to='/link3'>Link-3</Link>
            </li>
        </ul>
      </div>
    );
  }
}
