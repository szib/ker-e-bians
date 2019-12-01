import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage';
import MapPage from './pages/MapPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <MapPage />
        </Route>
        <Route path="/">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
