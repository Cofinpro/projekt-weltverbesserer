import React, { Component } from "react";
import businessman from "./img/businessman.jpg";
import "./App.css";
import CharacterLabels from "./Components/CharacterLabels";
import Box from "./Components/DropTarget";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <CharacterLabels/>
          <img src={businessman} className="img-circle" alt="logodrei" width="304" height="236"/>
          <Box/>
        </div>             
      <row>
          <a href="/eigenschaften" className="btn btn-outline-secondary float-right" role="button">Weiter</a>
        </row>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend) (App);
