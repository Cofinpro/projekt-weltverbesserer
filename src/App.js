import React, { Component } from "react";
import businessman from "./img/businessman.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <img src={businessman} className="App-logo" alt="logodrei" />
        </div>
      <row>
          <a href="/eigenschaften" class="btn btn-outline-secondary float-right" role="button">Weiter</a>
        </row>
      </div>
    );
  }
}

export default App;
