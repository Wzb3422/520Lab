import {
  SWITCH_HEADER
} from './constants'

const defaultState = {
  active: 0
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case SWITCH_HEADER:
      return {
        active: action.value
      }
    default:
      return state
  }
}
