import {
  ON_INPUT_CHANGE,
  GET_ALTER_LIST,
  SHOW_ALTER
} from './constants'
import get from '../../../lib/get'

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