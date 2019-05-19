import {
  ON_INPUT_CHANGE,
  GET_ALTER_LIST,
  SHOW_ALTER,
  POST_QUES
} from './constants'

const defaultState = {
  message: '',
  alter: [],
  index: 0,
  set_id: 0
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case ON_INPUT_CHANGE:
      newState.message = action.value
      return newState
    case GET_ALTER_LIST:
      newState.alter = action.value
      return newState
    case SHOW_ALTER:
      newState.message = newState.alter[newState.index]
      newState.index++
      if (newState.index === 10) {
        newState.index = 0
      }
      return newState
    case POST_QUES:
      newState.set_id = action.value
      return newState
    default:
      return newState
  }
}