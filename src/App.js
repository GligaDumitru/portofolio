import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Components from './views/Components/Components';
import ProfilePage from './views/ProfilePage/ProfilePage';

import './styles/index.scss';

const App = () => (
  <Switch>
    <Route exact path='/profile' component={ProfilePage} />
    <Route exact path='/components' component={Components} />
    <Route path='/' component={ProfilePage} />
  </Switch>
);

export default App;
