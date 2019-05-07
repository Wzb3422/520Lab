import {
  SWITCH_HEADER,
  TOGGLE_JOIN
} from './constants'

export const switchHeaderAction = (value) => {
  return {
    type: SWITCH_HEADER,
    value
  }
}

export const toggleJoin = () => {
  return {
    type: TOGGLE_JOIN
  }
}