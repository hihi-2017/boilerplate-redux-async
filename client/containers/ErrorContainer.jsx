import React from 'react'
import {connect} from 'react-redux'

const ErrorContainer = (props) => (
  <div>
      {props.message ? props.message : '' }
  </div>
)

function mapStateToProps(state) {
  return {
    message: state.error
  }
}

export default connect(mapStateToProps)(ErrorContainer)
