import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import App from './components/app';
import Indexpage from './components/indexpage';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import Feature from './components/feature';

import { AUTH_USER, UNAUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxPromise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
/* If there is existing token in localStorage connect session with user */ 
token? store.dispatch({ type: AUTH_USER }): store.dispatch({ type: UNAUTH_USER });

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
      <IndexRoute component={ Indexpage } />
        <Route path="signin" component={ Signin } />
        <Route path="signout" component={ Signout } />
        <Route path="signup" component={ Signup } />
        <Route path="feature" component= { RequireAuth(Feature) } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
