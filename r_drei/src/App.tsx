import * as React from "react";
import { Link } from "react-router";

const style = require("./App.css");
const logo = require("./logo.svg");

export default class App extends React.Component {
    getZeitstempel() {
        let date : Date = new Date();
        return date.toLocaleDateString();
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React r_drei {this.getZeitstempel()}</h2>
        </div>
        <ul>
            <li>
                I'm root :)
            </li>
            <li>
                <Link to='/link1'>Link-1</Link>
            </li>
            <li>
                <Link to='/link2'>Link-2</Link>
            </li>
            <li>
                <Link to='/link3'>Link-3</Link>
            </li>
        </ul>
      </div>
    );
  }
}

