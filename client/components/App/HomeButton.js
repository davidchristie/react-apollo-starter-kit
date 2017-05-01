import React from 'react'
import { NavItem } from 'react-bootstrap'
import { browserHistory } from 'react-router'

export default class HomeButton extends React.Component {
  goHome () {
    browserHistory.push('/home')
  }

  render () {
    return <NavItem onClick={this.goHome}>Home</NavItem>
  }
}
