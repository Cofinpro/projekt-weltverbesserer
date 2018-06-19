import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Eigenschaften from './pages/eigenschaften-auswahl/';
import {BrowserRouter}  from 'react-router-dom'
import RouterWeltverbesserer from './templates/RouterWeltverbesserer';



ReactDOM.render(
<BrowserRouter>
<RouterWeltverbesserer/>
</BrowserRouter>,
  document.getElementById('root')
);
