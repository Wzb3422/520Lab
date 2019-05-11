import {
  CHANGE_SHEET,
  CHANGE_NUM
} from './constants'

const defaultState = {
  options: ['Halo你好啊', '你有没有对象呢?', '你一定是学霸了', '哈哈哈哈哈哈'],
  isIn: false,
  num: 1
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case CHANGE_SHEET:
      newState.isIn = !newState.isIn
      return newState
    case CHANGE_NUM:
      // alert(action.value)
      newState.num += parseInt(action.value)
      return newState
    default:
      return newState
  }
}
