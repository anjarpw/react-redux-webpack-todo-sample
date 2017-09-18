import React from 'react'
import VisibleTodoList from './../todo-list/todo-list.js'
import Footer from './../footer/footer.js'
import AddTodoForm from './addTodoForm.js'
const App = () => (
  <div>
    HELLO
    <AddTodoForm></AddTodoForm>
    <VisibleTodoList></VisibleTodoList>
    <Footer></Footer>
  </div>
)

export default App
