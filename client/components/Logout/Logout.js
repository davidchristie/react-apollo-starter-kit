import React from 'react'
import { NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import logout from '../../actions/logout'

class Logout extends React.Component {
  constructor (props) {
    super(props)
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser () {
    this.props.logout()
    window.localStorage.clear()
    browserHistory.push('/')
  }

  render () {
    return (
      <NavItem onClick={this.logoutUser}>Logout</NavItem>
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
