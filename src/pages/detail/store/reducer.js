import {
  GET_QUES_TEXT
} from './constants'

const defaultState = {
  questionList: [
    {
      question: '获取失败',
      yours: {
        choice: 'A',
        content: '获取失败'
      },
      his: {
        choice: 'B',
        content: '获取失败'
      }
    }
  ]
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case GET_QUES_TEXT:
      newState.questionList = action.value
      return newState
    default:
      return newState
  }
}
