import React from 'react'
import { connect } from 'react-redux'
import { dispatchAction } from 'redux-wrapper-extended'

let addTodoForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatchAction(dispatch,'ADD_TODO',input.value);
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
const AddTodoForm = connect()(addTodoForm)

export default AddTodoForm
