import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React r_zwei</h2>
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

export default App;

