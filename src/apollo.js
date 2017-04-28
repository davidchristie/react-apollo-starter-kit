import ApolloClient, { createNetworkInterface } from 'apollo-client'

import config from './config'

const networkInterface = createNetworkInterface({
  uri: config.scapholdUrl
})
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }
    if (window.localStorage.getItem('token')) {
      req.options.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
    }
    next()
  }
}])

const client = new ApolloClient({
  networkInterface
})

export default client
