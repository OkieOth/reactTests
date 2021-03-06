import * as React from "react";
import { Link } from "react-router";

const style = require("./App.css");
const logo = require("./logo.svg");

export default class Link3 extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I'm Link-3 (r_drei)</h2>
        </div>
        <ul>
            <li>
                <Link to='/'>Back to root</Link>
            </li>
            <li>
                <Link to='/link1'>Link-1</Link>
            </li>
            <li>
                <Link to='/link2'>Link-2</Link>
            </li>
            <li>
                already there
            </li>
        </ul>
      </div>
    );
  }
}
