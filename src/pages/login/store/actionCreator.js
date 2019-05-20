import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
  SET_NAME,
  SET_ID,
  UPDATE_MSG,
  SET_SEX,
  GET_MY_SETIDS
} from './constants'
import post from '../../../lib/post'
import get from '../../../lib/get'

export const onUsernameChangeAction = (value) => ({
  type: ON_CHANGE_USERNAME,
  value
})

export const onPasswordChangeAction = (value) => ({
  type: ON_CHANGE_PASSWORD,
  value
})

export const setNameAction = value => ({
  type: SET_NAME,
  value
})
// const loginAction = (token) => {
//   type: LOGIN
// }

export const loginAsyncAction = (username, password) => {
  return dispatch => {
    let data = {
      username,
      password
    }
    new Promise(resolve => {
      let ret = post('/api/user/login', data, '')
      resolve(ret)
    })
    .then(ret => {
      dispatch(setTokenAction(ret.token))
      dispatch(setNameAction(ret.name))
      dispatch(updateStatusMessage(ret.message))
      dispatch(setSexAction(ret.sex))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}

export const setTokenAction = (value) => ({
  type: SET_TOKEN,
  value
})

export const setIdAction = value => ({
  type: SET_ID,
  value
})

export const setSexAction = value => ({
  type: SET_SEX,
  value
})

export const updateStatusMessage = value => ({
  type: UPDATE_MSG,
  value
})

export const getMySetidsAction = value => ({
  type: GET_MY_SETIDS,
  value
})

export const getMySetidsAsyncAction = token => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/question/my', token)
      resolve(ret)
    })
    .then(ret => {
      let { data } = ret
      let mySetids = []
      data.map(item => {
        mySetids.push(item.set_id)
        return null
      })
      console.log(mySetids)
      dispatch(getMySetidsAction(mySetids))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}