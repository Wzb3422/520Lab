import {CHANGE_QUESTION, SELECT_OPTION, SET_QUESTIONS} from './constants'

const defaultState = [];

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SELECT_OPTION:
      newState.forEach(item => {item.index === action.questionIndex && (item.yourOption = action.optionIndex)});
      return newState;
    case SET_QUESTIONS:
      newState = action.value;
      return newState;
    case CHANGE_QUESTION:
      action.data.index = action.questionIndex;
      action.data.id = Number(action.data.id);
      newState[5 - action.questionIndex] = action.data;
      return newState;
    default:
      return newState
  }
}
