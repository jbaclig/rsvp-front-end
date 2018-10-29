import React, { Component } from 'react';
import RSVP from './Components/RSVP';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './Components/Admin';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route path="/" exact component={RSVP} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
