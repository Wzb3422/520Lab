import {
  ON_INPUT_CHANGE,
  GET_ALTER_LIST,
  SHOW_ALTER
} from './constants'

const defaultState = {
  message: '',
  alter: [],
  index: 0
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
      if (newState.index === 5) {
        newState.index = 0
      }
      return newState
    default:
      return newState
  }
}