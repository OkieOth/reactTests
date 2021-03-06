import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class Link2 extends Component {
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

export default Link2;
