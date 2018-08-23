import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Eigenschaften from './pages/eigenschaften-auswahl/index.jsx';
import {BrowserRouter}  from 'react-router-dom'
import RouterWeltverbesserer from './templates/RouterWeltverbesserer.jsx';

import "./index.css";

ReactDOM.render(
<BrowserRouter>
<RouterWeltverbesserer/>
</BrowserRouter>,
  document.getElementById('root')
);
