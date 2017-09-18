const css = require('./app/app.scss');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {StoreWrapper, ReducerWrapper} from 'redux-wrapper-extended';
import App from './app/app.js';
import { todoListRW,visibilityFilterRW } from './todo-list/todo-list.reducers.js'


const appReducers = ReducerWrapper.combine({
  todoList : todoListRW.getReducer(),
  visibilityFilter : visibilityFilterRW.getReducer()
});
const initialState = {
  todoList:[
    {
      id:-1,
      text:"hello",
      checked:false
    }
  ],
  visibilityFilter:'SHOW_ALL'
};

const storeWrapper = new StoreWrapper(appReducers,initialState);
const store = storeWrapper.getStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
