import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Eigenschaften from "../pages/eigenschaften-auswahl/";
import Character from "../pages/character-auswahl/index.jsx"

class RouterWeltverbesserer extends Component {
  render() {

    return (
      <main>
        <Switch>
          <Route exact path="/" component={Character} />
          <Route path="/eigenschaften" component={Eigenschaften} />
        </Switch>
      </main>
    );
  }
}
export default RouterWeltverbesserer;
