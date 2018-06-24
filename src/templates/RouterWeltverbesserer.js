import React from "react";
import { Switch, Route } from "react-router-dom";
import Eigenschaften from "../pages/eigenschaften-auswahl/";
import Character from "../pages/character-auswahl/"

const RouterWeltverbesserer = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Character} />
      <Route path="/eigenschaften" component={Eigenschaften} />
    </Switch>
  </main>
);

export default RouterWeltverbesserer;
