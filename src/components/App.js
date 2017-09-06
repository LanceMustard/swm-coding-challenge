import React, { Component } from 'react';
import HomePage from './HomePage.js';
import Story from './Story.js';
import Video from './Video.js';
import logo from '../resources/swm-logo.gif';
import '../style/site.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Page">
          <div className="PageHeader">
            <Link className="PageLogoLink" to="/">
              <img src={logo} className="PageLogo" alt="logo" />
            </Link>
            <h2>Coding Challenge by Lance Mustard</h2>
          </div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/story/:id" component={Story}/>
          <Route path="/video/:id" component={Video}/>
        </div>
      </Router>
    );
  }
}

export default App;
