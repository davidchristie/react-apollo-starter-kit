import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import {
  applyRouterMiddleware,
  browserHistory,
  Route,
  routes,
  Router
} from 'react-router'

import client from '../apollo'
import App from './components/App/App'
import GraphiQLModule from './components/GraphiQL/GraphiQL'
import Home from './components/Home/Home'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router
      history={browserHistory}
      routes={routes}
      render={
        applyRouterMiddleware()
      }
    >
      <Route path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/graphiql' component={GraphiQLModule} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
