import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components/index';
import SignupPage from 'containers/SignupPage';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={SignupPage}/>
  </Route>
);
