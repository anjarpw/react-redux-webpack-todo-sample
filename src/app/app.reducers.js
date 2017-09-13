import { ReducerWrapper } from 'redux-wrapper-extended'

import { todoListRW } from './../todo-list/todo-list.reducers.js'

var visibilityFilterRW = new ReducerWrapper('SHOW_ALL')
  .addHandler('SET_VISIBILITY',(s,pl) => {
    return pl.filter;
  })


const appReducers = ReducerWrapper.combine({
  todoList : todoListRW.getReducer(),
  visibilityFilter : visibilityFilterRW.getReducer()
});

export default appReducers
