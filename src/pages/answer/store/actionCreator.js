import {SELECT_OPTION, SET_QUESTIONS} from './constants'
import get from '../../../lib/get'
import {AddIndex} from '../../../lib/formatArray'

export const selectOptionAction = (value) => ({
  type: SELECT_OPTION,
  ...value
})

export const setQuestionsAction = (value) => ({
  type: SET_QUESTIONS,
  value: AddIndex(value)
})

export const getQuestionAction = (token,id) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/getset/'+id, token)
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
