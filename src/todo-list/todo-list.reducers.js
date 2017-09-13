import { ReducerWrapper } from 'redux-wrapper-extended'

var todoListRW = new ReducerWrapper()
  .addHandler('ADD_TODO',(s,pl) => {
    return [
      ...s,
      {
        id:pl.id,
        text:pl.text,
        completed:false
      }
    ];
  })
  .addHandler('TOGGLE_TODO',(s,pl)=>{
    return state.map(todo=>{
      if(todo.id === pl.id){
        return {...todo, completed: todo.completed};
      }else{
        return todo;
      }
    });
  });

export {
  todoListRW as todoListRW
}
