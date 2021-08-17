import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './containers/App';

function AppNext() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}

export default AppNext;
