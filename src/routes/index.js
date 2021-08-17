import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Temperature from './Temperature';
import Grafic from './Grafic';
import Data from './Data';

function App(props) {
  const { match } = props;

  return (
    <Switch>
      <Route
        path={`${match.url}/temperaturas`}
        component={Temperature}
      />
      <Route path={`${match.url}/graficas`} component={Grafic} />
      <Route path={`${match.url}/informacion`} component={Data} />
    </Switch>
  );
}

export default App;
