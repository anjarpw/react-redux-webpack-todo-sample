import { connect } from 'react-redux'
import { dispatchAction } from 'redux-wrapper-extended'
import React from 'react'
import PropTypes from 'prop-types'

const TodoVm = ({
  todo,
  handleCheckboxChanged
}) => (
  <div>
    {todo.text}
    <input type="checkbox" checked={todo.checked}  onChange={handleCheckboxChanged}/>
  </div>
)


const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    handleCheckboxChanged: id => {
      dispatchAction(dispatch, 'TOGGLE_TODO', id)
    }
  }
}

var Todo =  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoVm);

export default Todo;
