import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  uri: 'https://us-west-2.api.scaphold.io/graphql/react-apollo-example'
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
