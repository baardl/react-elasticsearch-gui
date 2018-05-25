import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './elastic-logo-V-full color.png';
import './App.css';
import Search from "./search/Search";
import BoostSearch from "./search/BoostSearch";
import PersonalizedSearch from "./search/PersonalizedSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Elasticsearch simple GUI</h1>
        </header>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route exact path='/boost' component={BoostSearch}/>
          <Route exact path='/personalized' component={PersonalizedSearch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
