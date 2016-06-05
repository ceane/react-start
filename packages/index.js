import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App , Main } from 'rs-react-containers';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='main' component={Main} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
