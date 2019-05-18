import {
  CHANGE_NUM_NEW,
  SET_ANSWER_NEW,
  SET_QUESTIONS
} from './constants'

const defaultState = {
  num: 0,
  questions: [
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
  ],
  setAnswer: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case CHANGE_NUM_NEW:
      if ( action.value === 1 && newState.num < 4 ) {
        newState.num += parseInt(action.value)
      }
      if (action.value === -1) {
        newState.num += parseInt(action.value)
      }
      return newState
    case SET_ANSWER_NEW:
      newState.setAnswer[newState.num] = action.value
      return newState
    case SET_QUESTIONS:
      newState.questions = action.value
      return newState
    default:
      return newState
  }
}
