import { ReducerWrapper } from 'redux-wrapper-extended'
var visibilityFilterRW = new ReducerWrapper('SHOW_ALL')
  .addHandler('SET_VISIBILITY',(s,pl) => {
    return pl.filter;
  })

let nextTodoId = 0;
var todoListRW = new ReducerWrapper([])
  .addHandler('ADD_TODO',(s,text) => {
    return [
      ...s,
      {
        id:nextTodoId++,
        text:text,
        completed:false
      }
    ];
  })
  .addHandler('TOGGLE_TODO',(s,id)=>{
    return state.map(todo=>{
      if(todo.id === id){
        return {...todo, completed: todo.completed};
      }else{
        return todo;
      }
    });
  });

export {
  todoListRW as todoListRW,
  visibilityFilterRW as visibilityFilterRW
}
