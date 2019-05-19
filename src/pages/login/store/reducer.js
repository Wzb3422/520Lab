import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
  SET_NAME,
  SET_ID,
  UPDATE_MSG
} from './constants'

const defaultState = {
  token: '',
  username: '',
  password: '',
  setid: 0,
  message: ''
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
    case SET_NAME:
      newState.name = action.value
      return newState
    case SET_ID:
      newState.setid = action.value
      return newState
    case UPDATE_MSG:
      newState.message = action.value
      return newState
    default:
      return newState
  }
}
