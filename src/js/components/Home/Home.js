import React from 'react'
import { browserHistory } from 'react-router'

import Body from './Body'
import Header from './Header'

class Home extends React.Component {
  render () {
    if (!window.localStorage.token) {
      browserHistory.push('/')
    }

    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

export default Home
