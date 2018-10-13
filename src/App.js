import React, { Component } from 'react';
import RSVP from './Components/RSVP';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="App-header">
          RSVP for Kelly &amp; Jon's wedding
        </header>
        <div className="row">
          <RSVP />
        </div>
      </div>
    );
  }
}

export default App;
