import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD
} from './constants'

const defaultState = {
  token: '',
  username: 'username',
  password: 'pwd'
}


export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case ON_CHANGE_USERNAME:
      newState.username = action.value
      return newState
    case ON_CHANGE_PASSWORD:
      newState.password = action.value
      return newState
    default:
      return newState
  }
}
