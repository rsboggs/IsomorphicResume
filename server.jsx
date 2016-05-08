import express from 'express';
import path from 'path';
import React from 'react';
import createLocation from 'history/lib/createLocation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from 'reducers';
import promiseMiddleware from 'lib/promiseMiddleware';
import { RouterContext, match } from 'react-router';
import routes from 'routes';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import fetchComponentData from 'lib/fetchComponentData';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('./webpack.dev').default(app);
}

app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  const location = createLocation(req.url);
  const reducer = combineReducers(reducers);
  const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

  match({ routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      console.error(error);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) {
      return res.status(404).end('Not found');
    }

    function renderView() {
      const InitialView = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      const componentHTML = renderToString(InitialView);

      const initialState = store.getState();

      const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Isomorphic Resume</title>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
        </head>
        <body>
          <div id='react-view'>${componentHTML}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
      </html>
      `;

      return HTML;
    }
    // fetch data
    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
    .then(renderView)
    .then(html => res.end(html))
    .catch(err => res.end(err.message));

  });

});

export default app;