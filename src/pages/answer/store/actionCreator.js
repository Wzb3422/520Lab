import {ANSWER_SELECT_OPTION, ANSWER_SET_QUESTIONS, POST_ANSWER, CHECK_EVER_ANSWER} from './constants'
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

export const postAnswerAction = (score, message) => ({
  type: POST_ANSWER,
  score: score,
  message : message,
})

export const postAnswerAsyncAction = (answer, setid, token) => {
  return dispatch => {
    const map = ['A', 'B', 'C', 'D']
    let answerProp = {}
    answer.map((item, index) => {
      answerProp[item.id] = map[item.yourOption]
      return null
    })
    let data = {
      set_id: setid,
      answer: answerProp,
      message: ''
    }
    new Promise(resolve => {
      let ret = post('/api/answer/my', data, token)
      resolve(ret)
    })
    .then(ret => {
      dispatch(postAnswerAction(ret.data.score,ret.data.message))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}

export const checkEverAnswerAction = value => ({
  type: CHECK_EVER_ANSWER,
  value
})

export const checkEverAnswerAsyncAction = (token, setid) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get(`/api/answercheck/${setid}`, token)
      resolve(ret)
    })
    .then(ret => {
      dispatch(checkEverAnswerAction(ret.message))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}
