import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  uri: 'https://us-west-2.api.scaphold.io/graphql/react-apollo-example'
})

networkInterface.use([{
  applyMiddleware (request, next) {
    if (!request.options.headers) {
      request.options.headers = {}
    }
    if (window.localStorage.getItem('token')) {
      request.options.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
    }
    next()
  }
}])

const client = new ApolloClient({
  networkInterface
})

export default client
