import { connect } from 'react-redux'
import Todo from './../todo/todo.js'
import { dispatchAction } from 'redux-wrapper-extended'
import React from 'react'
import PropTypes from 'prop-types'

const TodoListVm = ({
    todoList,
    onTodoClick,
    val
  }) => (
  <div>
    {todoList.map(todo => (
      <Todo key={todo.id} todo ={todo}></Todo>
    ))}
  </div>

)

TodoListVm.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

const getVisibleTodoList = (todoList, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todoList
    case 'SHOW_COMPLETED':
      return todoList.filter(t => t.checked)
    case 'SHOW_ACTIVE':
      return todoList.filter(t => !t.checked)
  }
}

const mapStateToProps = state => {
  return {
    todoList: getVisibleTodoList(state.todoList, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatchAction(dispatch, 'TOGGLE_TODO', id)
    }
  }
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListVm)

export default TodoList
