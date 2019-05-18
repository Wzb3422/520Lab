import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  LOGIN_ASYNC,
  LOGIN
} from './constants'
import axios from 'axios'

export const onUsernameChangeAction = (value) => ({
  type: ON_CHANGE_USERNAME,
  value
})

export const onPasswordChangeAction = (value) => ({
  type: ON_CHANGE_PASSWORD,
  value
})

// const loginAction = (token) => {
//   type: LOGIN
// }

export const loginAsyncAction = (username, password) => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://47.101.204.202:5000/api/user/login',
      data: {
        username,
        password
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}