import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import apollo from './apollo'
import user from './reducers/user'

export default createStore(
  combineReducers({
    apollo: apollo.reducer(),
    user
  }),
  compose(
    applyMiddleware(apollo.middleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)
