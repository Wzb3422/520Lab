import {ANSWER_SELECT_OPTION, ANSWER_SET_QUESTIONS} from './constants'
import get from '../../../lib/get'
import {AddIndex} from '../../../lib/formatArray'

export const AnswerselectOptionAction = (value) => ({
  type: ANSWER_SELECT_OPTION,
  ...value
})

export const AnswerSetQuestionsAction = (value) => ({
  type: ANSWER_SET_QUESTIONS,
  value : AddIndex(value)
})

export const AnswerGetQuestionAction = (token,id) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/getset/'+id, token)
      resolve(ret)
    })
      .then(ret => {
        dispatch(AnswerSetQuestionsAction(ret.data))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
