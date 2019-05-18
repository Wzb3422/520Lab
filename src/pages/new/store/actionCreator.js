import {
  CHANGE_NUM_NEW,
  SET_ANSWER_NEW
} from './constants'

export const changeNumAction = (value) => ({
  type: CHANGE_NUM_NEW,
  value
})

export const setAnswerAction = (value) => ({
  type: SET_ANSWER_NEW,
  value
})