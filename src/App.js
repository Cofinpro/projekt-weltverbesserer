import React, { Component } from 'react';
import businessman from './img/businessman.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={businessman} className="App-logo" alt="logodrei" />
      </div>
    );
  }
}

export default App;
