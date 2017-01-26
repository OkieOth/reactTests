import * as React from "react";
import { Link } from "react-router";

const style = require("./App.css");
const logo = require("./logo.svg");

export default class Link1 extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I'm Link-1</h2>
        </div>
        <ul>
            <li>
                <Link to='/'>Back to root</Link>
            </li>
            <li>
                already there
            </li>
            <li>
                <Link to='/link2'>Link-2</Link>
            </li>
            <li>
                <Link to='/link3'>Link-3</Link>
            </li>
            <li>
                Hallo2 :)
            </li>
        </ul>
      </div>
    );
  }
}

