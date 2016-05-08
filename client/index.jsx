import React from 'react';
import immutifyState from 'lib/immutifyState';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware }  from 'redux';
import * as reducers from 'reducers';
import promiseMiddleware from 'lib/promiseMiddleware';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';


const initialState = immutifyState(window.__INITIAL_STATE__);

const history = createBrowserHistory();

const reducer = combineReducers(reducers);
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);

render (
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
