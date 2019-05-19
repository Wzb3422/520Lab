import {
  ON_INPUT_CHANGE,
  GET_ALTER_LIST,
  SHOW_ALTER,
  POST_QUES
} from './constants'
import get from '../../../lib/get'
import post from '../../../lib/post'

export const onInputChangeAction = (value) => ({
  type: ON_INPUT_CHANGE,
  value
})

export const getAlternativesList = (value) => ({
  type: GET_ALTER_LIST,
  value
})

// 异步获取可选的messages
export const getAlternativesAsyncAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/question/message', token)
      resolve(ret)
    })
    .then(ret => {
      dispatch(getAlternativesList(ret.data.content))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}

export const showAlterAction = () => ({
  type: SHOW_ALTER
})

export const postNewQuesAction = value => ({
  type: POST_QUES,
  value
})

export const postNewQuesAsyncAction = (newData, message, token) => {
  return dispatch => {
    const map = ['A', 'B', 'C', 'D']
    let questions = {}
    newData.map((item, index) => {
      questions[item.id.toString()] = map[item.yourOption]
      return null
    })
    let data = {
      questions,
      messages: message
    }
    new Promise(resolve => {
      let ret = post('/api/question/my', data, token)
      resolve(ret)
    })
    .then(ret => {
      dispatch(postNewQuesAction(ret.set_id))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}
