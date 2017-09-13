const css = require('./app/app.scss');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import {StoreWrapper} from 'redux-wrapper-extended';

import App from './app/app.js';

import appReducers from './app/app.reducers.js';
const storeWrapper = new StoreWrapper(appReducers,
  {});

const store = storeWrapper.getStore();




render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
