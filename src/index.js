import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
