import React from 'react'
import {connect} from 'react-redux'

import {Alert} from '../UI'

const FlashMessage = ({
  message,
  type
}) => {
  return (
    <Alert message={message} type={type} />
  )
}

export default connect(
  state => {
    return {
      message: state.flash.message,
      type: state.flash.type
    }
  }
)(FlashMessage)
