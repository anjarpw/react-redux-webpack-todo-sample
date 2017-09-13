import { ReducerWrapper } from 'redux-wrapper-extended'

import { todoListRW,visibilityFilterRW } from './../todo-list/todo-list.reducers.js'



const appReducers = ReducerWrapper.combine({
  todoList : todoListRW.getReducer(),
  visibilityFilter : visibilityFilterRW.getReducer()
});

export default appReducers
