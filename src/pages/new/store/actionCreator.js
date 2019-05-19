import {CHANGE_QUESTION, SELECT_OPTION, SET_QUESTIONS} from './constants'
import get from '../../../lib/get'
import {OriginDataFormat} from '../../../lib/formatArray'

export const selectOptionAction = (value) => ({
  type: SELECT_OPTION,
  ...value
})

export const changeQuestionAction = (data,index) => ({
  type: CHANGE_QUESTION,
  data: data,
  questionIndex: index
})

export const setQuestionsAction = (value) => ({
  type: SET_QUESTIONS,
  value: OriginDataFormat(value)
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

export const getOneQuestionAction = (index, id, token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/question?id='+id, token)
      resolve(ret)
    })
      .then(ret => {
        dispatch(changeQuestionAction(ret.data,index))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
