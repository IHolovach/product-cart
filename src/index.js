import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './store';
import Cart from './containers/Cart';

import './assets/styles/index.css';

ReactDOM.render(
  <div id="app" className="app">
    <Provider store={store}>
      <Router>
        <Route exact path="/cart" component={Cart} />
        <Redirect from="/" to="/cart" />
      </Router>
    </Provider>
  </div>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
