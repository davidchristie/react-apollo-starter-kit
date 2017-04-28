import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import React from 'react'

import config from '../../../config'
import Header from '../App/Header'
import LoggedInHeader from '../Home/Header'

function graphQLFetcher (graphQLParams) {
  return fetch(config.scapholdUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: window.localStorage.token ? `Bearer ${window.localStorage.token}` : ''
    },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json())
}

class GraphiQLModule extends React.Component {
  render () {
    let header
    if (!window.localStorage.token) {
      header = <Header />
    } else {
      header = <LoggedInHeader />
    }

    return (
      <span>
        {header}
        <GraphiQL fetcher={graphQLFetcher} />
      </span>
    )
  }
}

export default GraphiQLModule
