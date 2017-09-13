import { connect } from 'react-redux'
import { dispatchAction } from 'redux-wrapper-extended'
import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ todoList, onTodoClick }) => (
  <ul>
    {todoList.map(todo => (
      <li onClick={() => onTodoClick(todo.id)}>
        {todo.text}
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
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
      return todoList.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todoList.filter(t => !t.completed)
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

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
