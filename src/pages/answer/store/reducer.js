import {ANSWER_SELECT_OPTION, ANSWER_SET_QUESTIONS} from './constants'

const defaultState = []

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ANSWER_SELECT_OPTION:
      let a;
      a = newState.find(
        item => (item.index === action.questionIndex)     //题号（非索引）
      );
      a.yourOption = action.optionIndex;                  //索引！
      newState.splice((5 - action.questionIndex), 1, a);
      return newState;
    case ANSWER_SET_QUESTIONS:
      newState = action.value;
      return newState;
    default:
      return newState
  }
}
