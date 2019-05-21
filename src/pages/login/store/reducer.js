import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
  SET_NAME,
  SET_ID,
  UPDATE_MSG,
  SET_SEX,
  CHECK_EVER_ANSWER,
  GET_MY_SETIDS,
  CLEAT_EVERMSG
} from './constants'

const defaultState = {
  token: '',
  username: '',
  password: '',
  setid: 0,
  message: '',
  everMessage: false,
  mySetIds: []
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
    case SET_SEX:
      newState.sex = action.value
      return newState
    case CHECK_EVER_ANSWER:
      newState.everMessage = action.value
      return newState
    case GET_MY_SETIDS:
      newState.mySetIds = action.value
      return newState
    case CLEAT_EVERMSG:
      newState.everMessage = 'other'
      return newState
    default:
      return newState
  }
}
