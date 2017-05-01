import React from 'react'
import { browserHistory } from 'react-router'

import Body from './Body'

class Home extends React.Component {
  render () {
    if (!window.localStorage.token) {
      browserHistory.push('/')
    }

    return (
      <div>
        <Body />
      </div>
    )
  }
}

export default Home
