import {ANSWER_SELECT_OPTION, ANSWER_SET_QUESTIONS} from './constants'

const defaultState = []

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ANSWER_SELECT_OPTION:
      newState.forEach(item => {item.index === action.questionIndex && (item.yourOption = action.optionIndex)});
      return newState;
    case ANSWER_SET_QUESTIONS:
      newState = action.value;
      return newState;
    default:
      return newState
  }
}
