import { connect } from 'react-redux'
import { dispatchAction } from 'redux-wrapper-extended'
import React from 'react'
import PropTypes from 'prop-types'

const TodoVm = ({
  todo,
  onCheckboxChanged,
  onDeleteClick,
  isChecked
}) => (
  <div>
    {todo.text} {isChecked}
    <input type="checkbox" checked={todo.checked}  onChange={onCheckboxChanged}/>
    <button onClick={onDeleteClick}>DELETE</button>
  </div>
)


const mapStateToProps = (state,ownProps) => {
  return {
    isChecked:ownProps.todo.checked?"YES":"NO"
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onCheckboxChanged: () => {
      dispatchAction(dispatch, 'TOGGLE_TODO', ownProps.todo.id)
    },
    onDeleteClick: () => {
      dispatchAction(dispatch, 'DELETE_TODO', ownProps.todo.id)
    }
  }
}

var Todo =  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoVm);

export default Todo;
