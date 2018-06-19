import React from "react";
import { Switch, Route } from "react-router-dom";
import Eigenschaften from "../pages/eigenschaften-auswahl/";
import App from "../App";

const RouterWeltverbesserer = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/eigenschaften" component={Eigenschaften} />
    </Switch>
  </main>
);

export default RouterWeltverbesserer;
