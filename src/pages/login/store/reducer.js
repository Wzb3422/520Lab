import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN
} from './constants'

const defaultState = {
  token: '',
  username: '6109118175',
  password: '3422w8516'
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
    case SET_TOKEN:
      newState.token = action.value
      return newState
    default:
      return newState
  }
}
