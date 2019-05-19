import {
  POST_ANSWER
} from './constants'

const defaultState = {
  score: 73
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case POST_ANSWER:
      newState.score = action.value
      return newState
    default:
      return newState
  }
}
