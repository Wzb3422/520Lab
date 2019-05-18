import {CHANGE_OPTION, SELECT_OPTION, SET_QUESTIONS} from './constants'
import get from '../../../lib/get'

export const selectOptionAction = (value) => ({
  type: SELECT_OPTION,
  ...value
})

export const changeOptionAction = (value) => ({
  type: CHANGE_OPTION,
  ...value
})

export const setQuestionsAction = (value) => ({
  type: SET_QUESTIONS,
  value
})

export const getQuestionAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/question', token)
      resolve(ret)
    })
      .then(ret => {
        dispatch(setQuestionsAction(ret))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}

