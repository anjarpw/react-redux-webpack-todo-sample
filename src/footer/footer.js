import { connect } from 'react-redux'
import { dispatchAction } from 'redux-wrapper-extended'
import React from 'react'
import PropTypes from 'prop-types'

const FooterVm = ({
  count,
  checkedItems
}) => (
  <div>
    COUNT {count}
  </div>
)

const getCount = (todoList) => {
      return todoList.filter(t => t.checked).length;
}


const mapStateToProps = state => {
  return {
    count: getCount(state.todoList)
  }
}


const mapDispatchToProps = dispatch => {
  return {}
}

var Footer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterVm);

export default Footer;
