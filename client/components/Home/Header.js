import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { browserHistory, Link } from 'react-router'

import Logout from './Logout'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.goHome = this.goHome.bind(this)
  }

  goHome () {
    browserHistory.push('/home')
  }

  render () {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const loggedInUser = user ? user.username : ''

    return (
      <Navbar style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/home'>Scaphold</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem onClick={this.goHome}>Home</NavItem>
          <NavItem>{loggedInUser}</NavItem>
          <Logout />
        </Nav>
      </Navbar>
    )
  }
}

const styles = {
  navbar: {
    marginBottom: 0
  }
}

export default Header
