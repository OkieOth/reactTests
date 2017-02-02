import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class Link3 extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I'm Link-3</h2>
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

export default Link3;
