import React, { Component } from 'react';
import RSVP from './Components/RSVP';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <header className="App-header p-5 text-center">
          <h1>
            RSVP for Kelly &amp; Jon's Wedding<br/>
            <small>February 1st, 2019</small><br/>
            <small>San Diego, CA</small>
          </h1>
        </header>
        <div className="row justify-content-center">
            <RSVP />
          
        </div>
      </div>
    );
  }
}

export default App;
