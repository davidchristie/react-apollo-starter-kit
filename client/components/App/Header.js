import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import user from '../../selectors/user'
import Login from '../Login'
import Logout from '../Logout'
import Register from '../Register'
import HomeButton from './HomeButton'

const styles = {
  navbar: {
    marginBottom: 0
  }
}

class Header extends React.Component {
  render () {
    const { user } = this.props
    return (
      <Navbar style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Scaphold</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <HomeButton />
          {
            user
              ? [
                <NavItem key={0}>{user.username}</NavItem>,
                <Logout key={1} />
              ]
              : [
                <Login key={0} />,
                <Register key={1} />
              ]
          }
        </Nav>
      </Navbar>
    )
  }
}

export default connect(
  state => {
    return {
      user: user(state)
    }
  }
)(Header)
