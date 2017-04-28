import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import {
  applyRouterMiddleware,
  browserHistory,
  Route,
  Router,
  routes
} from 'react-router'

import client from './apollo'
import App from './components/App/App'
import Home from './components/Home/Home'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router
      history={browserHistory}
      render={
        applyRouterMiddleware()
      }
      routes={routes}
    >
      <Route path='/' component={App} />
      <Route path='/home' component={Home} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
