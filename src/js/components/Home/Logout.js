import React from 'react'
import { NavItem } from 'react-bootstrap'
import { browserHistory } from 'react-router'

class Logout extends React.Component {
  constructor (props) {
    super(props)
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser () {
    window.localStorage.clear()
    browserHistory.push('/')
  }

  render () {
    return (
      <NavItem onClick={this.logoutUser}>Logout</NavItem>
    )
  }
}

export default Logout
