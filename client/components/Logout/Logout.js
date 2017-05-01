import React from 'react'
import { NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'

import logout from '../../actions/logout'

class Logout extends React.Component {
  render () {
    return (
      <NavItem onClick={this.props.logout}>Logout</NavItem>
    )
  }
}

export default connect(
  null,
  dispatch => {
    return {
      logout: () => dispatch(logout())
    }
  }
)(Logout)
