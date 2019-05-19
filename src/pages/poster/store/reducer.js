import {
  POST_ANSWER
} from './constants'

const defaultState = {
  score: 73,
  index: 0,
  message: ''
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case POST_ANSWER:
      newState.score = action.score
      newState.message = action.message
      if (newState.score <= 30) {
        newState.index = 0
      }
      if (newState.score > 30 && newState.score <= 60) {
        newState.index = 1
      }
      if (newState.score > 60 && newState.score <= 90) {
        newState.index = 2
      }
      if (newState.score > 90) {
        newState.index = 3
      }
      return newState
    default:
      return newState
  }
}
