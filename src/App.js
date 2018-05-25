import React, { Component } from 'react';
import logo from './elastic-logo-V-full color.png';
import './App.css';
import Search from "./search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Elastic Search</h1>
        </header>
        <p className="App-intro">
          Default search
        </p>
        <Search/>
      </div>
    );
  }
}

export default App;
