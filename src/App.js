import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './views/LandingPage/LandingPage';
import ProfilePage from './views/ProfilePage/ProfilePage';

const App = () => (
  <Switch>
    <Route exact path='/profile' component={ProfilePage} />
    <Route path='/' component={LandingPage} />
  </Switch>
);

export default App;
