import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App , Main } from 'rs-react-containers';

// const routes = (
//   <Router history={browserHistory}>
//     <Route path='/dist' component={App}>
//       <Route path='*' component={Main} />
//     </Route>
//   </Router>
// );
//
// ReactDOM.render(
//   routes,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App>
    <Main/>
  </App>
  , document.getElementById('root'));
