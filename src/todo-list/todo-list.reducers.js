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
        checked:true
      }
    ];
  })
  .addHandler('TOGGLE_TODO',(s,id)=>{
    return s.map(todo=>{
      if(todo.id === id){
        return {...todo, checked: !todo.checked};
      }else{
        return todo;
      }
    });
  })
  .addHandler('DELETE_TODO',(s,id)=>{
    return s.filter(x=>x.id != id);
  });

export {
  todoListRW as todoListRW,
  visibilityFilterRW as visibilityFilterRW
}
