import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'

import Login from '../Login'
import Register from './Register'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  goHome () {
    browserHistory.push('/')
  }

  render () {
    return (
      <Navbar style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Scaphold</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem onClick={this.goHome}>Home</NavItem>
          <Login />
          <Register />
        </Nav>
      </Navbar>
    )
  }
}

export default Header

const styles = {
  navbar: {
    marginBottom: 0
  }
}
