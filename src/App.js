import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './elastic-logo-V-full color.png';
import './App.css';
import Search from "./search/Search";
import BoostSearch from "./search/BoostSearch";
import PersonalizedSearch from "./search/PersonalizedSearch";
import Bruksdata from "./bruksdata/Bruksdata";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Elasticsearch simple GUI</h1>
        </header>
        <ul>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/boost">Boost search</Link></li>
          <li><Link to="/personalized">Personalized term search</Link></li>
          <li><Link to="/bruksdata">Bruksdata</Link></li>
        </ul>
        <Switch>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/boost' component={BoostSearch}/>
          <Route exact path='/personalized' component={PersonalizedSearch}/>
          <Route exact path='/bruksdata' component={Bruksdata}/>
        </Switch>
      </div>
    );
  }
}

export default App;
