/**
 * 主入口程序
 */

import React from 'react';
import {
  render
} from 'react-dom';
import {
  bindActionCreators,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  connect,
  Provider
} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'reducers';
import * as actionCreators from 'actions';

import Deskmark from 'components/Deskmark';
import 'bootstrap/scss/bootstrap.scss';

// const store = applyMiddleware(
//   thunkMiddleware
// )(createStore)(rootReducer);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const App = connect(
  state => ({
    state
  }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Deskmark);

const container = document.body.appendChild(
  document.createElement('div')
);

render(
  <Provider store={store}>
    <App />
  </Provider>, container
)