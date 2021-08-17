import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import Home from './Home';
import Main from './Main';

function App() {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/home') {
      history.push('/home');
    } else {
      history.push('/dashboard/temperaturas');
    }
  }, []);

  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path={`${match.url}dashboard`} component={Main} />
    </Switch>
  );
}

export default App;
