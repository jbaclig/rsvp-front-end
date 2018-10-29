import React, { Component } from 'react';
import RSVP from './Components/RSVP';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './Components/Admin';
import './App.css';
import createHashHistory from 'history/createHashHistory';
    
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div>
          <Route path="/" exact component={RSVP} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
