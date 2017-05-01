import { browserHistory } from 'react-router'

export default user => {
  window.localStorage.clear()
  browserHistory.push('/')
  return {
    type: 'LOGOUT'
  }
}
