import {
  SWITCH_HEADER
} from './constants'

export const switchHeaderAction = (value) => {
  return {
    type: SWITCH_HEADER,
    value
  }
}
