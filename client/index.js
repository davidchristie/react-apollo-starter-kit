import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import {
  applyRouterMiddleware,
  browserHistory,
  IndexRoute,
  Route,
  Router,
  routes
} from 'react-router'

import client from './apollo'
import App from './components/App'
import Home from './components/Home'
import Landing from './components/Landing'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router
      history={browserHistory}
      render={
        applyRouterMiddleware()
      }
      routes={routes}
    >
      <Route path='/' component={App}>
        <IndexRoute component={Landing} />
        <Route path='/home' component={Home} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
