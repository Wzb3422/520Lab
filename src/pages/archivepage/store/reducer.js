import {
  SWITCH_HEADER,
  TOGGLE_JOIN,
  GET_IJOINED,
  GET_IINIT
} from './constants'

const defaultState = {
  active: 0,
  IinitiatedList: [],
  IjoinedList: [],
  isIjoinedShow: true
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case SWITCH_HEADER:
      newState.active = action.value
      return newState
    case TOGGLE_JOIN:
      newState.isIjoinedShow = !newState.isIjoinedShow
      return newState
    case GET_IJOINED:
      newState.IjoinedList = action.value
      return newState
    case GET_IINIT:
      let originList = action.value
      let list = []
      originList.map((item, index) => {
        let { set_id } = item
        item.all_answers.map(item => {
          list.push({
            set_id,
            name: item.name,
            answers: item.answers,
            score: item.score
          })
          return null
        })
        return null
      })
      newState.IinitiatedList = list
      return newState
    default:
      return state
  }
}
