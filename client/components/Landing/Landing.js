import gql from 'graphql-tag'
import React from 'react'

import client from '../../apollo'
import Description from './Description'
import Hero from './Hero'

const userQuery = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
    }
  }
`

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    const token = window.localStorage.getItem('token')
    const user = JSON.parse(window.localStorage.getItem('user'))
    const userId = user ? user.id : null
    if (token && userId) {
      // If we are logged in subscribe to the user and render the app.
      this.subscribeToUser(userId)
    } else {
      // We are not logged in so stop loading and render the landing page.
      this.setState({ // eslint-disable-line
        loading: false
      })
    }
  }

  subscribeToUser (id) {
    const that = this
    const observable = client.watchQuery({
      query: userQuery,
      pollInterval: 60000,
      forceFetch: true,
      variables: {
        id
      }
    })
    const subscription = observable.subscribe({
      next (result) {
        if (result && result.errors) {
          const unauthed = result.errors.reduce((acc, err) => (
            acc || err.status === 401
          ), false)
          if (unauthed) {
            window.localStorage.clear()
            that.setState({
              user: result.data.getUser,
              loading: false
            })
          }
        } else {
          window.localStorage.setItem('currentUsername', result.data.getUser.username)
          that.setState({
            user: result.data.getUser,
            loading: false
          })
        }
      },
      error (error) {
        console.log(`Error subscribing to user: ${error.toString()}`)
        that.setState({
          loading: false
        })
      }, // Network error, etc.
      complete () {
        // console.log(`Subscription complete`)
      }
    })
    this.setState({
      userSubscription: subscription
    })
  }

  render () {
    return (
      <div>
        <Hero />
        <Description />
      </div>
    )
  }
}

Landing.propTypes = {}

export default Landing
