import {ANSWER_SELECT_OPTION, ANSWER_SET_QUESTIONS, POST_ANSWER} from './constants'
import get from '../../../lib/get'
import post from '../../../lib/post'
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

export const postAnswerAction = value => ({
  type: POST_ANSWER,
  value
})

export const postAnswerAsyncAction = (answer, setid, token) => {
  return dispatch => {
    const map = ['A', 'B', 'C', 'D']
    console.log(answer)
    let answerProp = {}
    answer.map((item, index) => {
      answerProp[item.id] = map[item.yourOption]
    })
    let data = {
      set_id: setid,
      answer: answerProp,
      message: ''
    }
    console.log(answerProp)
    new Promise(resolve => {
      let ret = post('/api/answer/my', data, token)
      resolve(ret)
    })
    .then(ret => {
      dispatch(postAnswerAction(ret.data.score))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}