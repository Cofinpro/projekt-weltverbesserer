import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Eigenschaften from "../pages/eigenschaften-auswahl/index.jsx"
import Character from "../pages/character-auswahl/"
import Pokemon from "../pages/pokemon/index.jsx"
import Welcome from "../pages/welcome/index.jsx"
import Layout from "../components/layout/index.jsx"
import AGB from "../pages/agb/"
import Impressum from "../pages/impressum"
import Datenschutz from "../pages/datenschutz"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock"


class RouterWeltverbesserer extends Component {
  render() {
    const bodyScrollLock = require("body-scroll-lock");
    bodyScrollLock.enableBodyScroll(this);

    return (
      <main>
        <Layout>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/charakter" component={Character} />
          <Route path="/eigenschaften" component={Eigenschaften} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/agb" component={AGB} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/datenschutz" component={Datenschutz} />
        </Switch>
        </Layout>
      </main>
    );
  }
}
export default RouterWeltverbesserer;
