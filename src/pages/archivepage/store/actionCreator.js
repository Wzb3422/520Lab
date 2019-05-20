import {
  SWITCH_HEADER,
  TOGGLE_JOIN,
  GET_IJOINED,
  GET_IINIT,
  DETAIL_CLICK
} from './constants'
import get from '../../../lib/get'

export const switchHeaderAction = (value) => {
  return {
    type: SWITCH_HEADER,
    value
  }
}

export const toggleJoin = () => {
  return {
    type: TOGGLE_JOIN
  }
}

export const getIjoinedAction = (value) => ({
  type: GET_IJOINED,
  value
})

export const getIjoinedAsyncAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/answer/my', token)
      resolve(ret)
    })
    .then(ret => {
      // console.log(ret)
      if (ret.status) {
        dispatch(getIjoinedAction(ret.data))
      }
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}

export const getIinitiatedAction = (value) => ({
  type: GET_IINIT,
  value
})

export const getIinitiatedAsyncAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/question/my', token)
      resolve(ret)
    })
    .then(ret => {
      dispatch(getIinitiatedAction(ret.data))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}

export const detailClickAction = (value) => ({
  type: DETAIL_CLICK,
  value
})