import {
  SWITCH_HEADER,
  TOGGLE_JOIN
} from './constants'

const defaultState = {
  active: 0,
  IinitiatedList: [
    {
      id: "1",
      name: "艺术家",
      similarityRate: "10%",
    },
    {
      id: "2",
      name: "艺术家",
      similarityRate: "20%",
    },
    {
      id: "3",
      name: "艺术家",
      similarityRate: "30%",
    },
    {
      id: "4",
      name: "艺术家",
      similarityRate: "40%",
    },
    {
      id: "5",
      name: "艺术家",
      similarityRate: "50%",
    }
  ],
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
    default:
      return state
  }
}
