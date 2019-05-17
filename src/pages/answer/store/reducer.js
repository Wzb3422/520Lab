import {
  CHANGE_SHEET,
  CHANGE_NUM
} from './constants'

const defaultState = [
  {
    id: 11,
    question: "这是第五题???",
    options: ['第五题', '你有没有对象呢?', '你一定是学霸了', '哈哈哈哈哈哈'],
    yourOption: null,
    index: 5,
  },
  {
    id: 42,
    question: "这是第四题",
    options: ['第四题', '你有没有对象呢?', '你一定是学霸了', '哈哈哈哈哈哈'],
    yourOption: null,
    index: 4,
  },
  {
    id: 23,
    question: "这是第三题",
    options: ['第三题', '你有没有对象呢?', '你一定是学霸了', '哈哈哈哈哈哈'],
    yourOption: null,
    index: 3,
  },
  {
    id: 14,
    question: "这是第二题",
    options: ['第二题', '你有没有对象呢?', '你一定是学霸了', '哈哈哈哈哈哈'],
    yourOption: null,
    index: 2,
  },
  {
    id: 25,
    question: "这是第一题",
    options: ['第一题', '你有没有对象呢?', '你一定是学霸了', '哈哈哈哈哈哈'],
    yourOption: null,
    index: 1,
  }
]

//const newQuestion = {}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case CHANGE_SHEET:
      newState.isIn = !newState.isIn
      return newState
    case CHANGE_NUM:
      newState.num += parseInt(action.value)
      return newState
    //case CHANGE_QUS:
      //newState.num //发送要更换的题目的id给服务端，返回一个题目，然后替换该id的区块
    default:
      return newState
  }
}
