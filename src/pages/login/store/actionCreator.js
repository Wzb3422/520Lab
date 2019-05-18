import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN
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
