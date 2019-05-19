import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
  SET_NAME,
  SET_ID,
  UPDATE_MSG
} from './constants'
import post from '../../../lib/post'

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
      console.log(ret)
      dispatch(setTokenAction(ret.token))
      dispatch(setNameAction(ret.name))
      dispatch(updateStatusMessage(ret.message))
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

export const updateStatusMessage = value => ({
  type: UPDATE_MSG,
  value
})