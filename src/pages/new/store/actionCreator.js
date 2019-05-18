import {
  CHANGE_NUM_NEW,
  SET_ANSWER_NEW,
  SET_QUESTIONS
} from './constants'
import get from '../../../lib/get'

export const changeNumAction = (value) => ({
  type: CHANGE_NUM_NEW,
  value
})

export const setAnswerAction = (value) => ({
  type: SET_ANSWER_NEW,
  value
})

export const getQuestionAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/question', token)
      resolve(ret)
    })
    .then(ret => {
      dispatch(setQuestionsAction(ret.data))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}

export const setQuestionsAction = (value) => ({
  type: SET_QUESTIONS,
  value
})
