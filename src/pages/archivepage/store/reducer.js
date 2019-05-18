import {
  SWITCH_HEADER,
  TOGGLE_JOIN,
  GET_IJOINED,
  GET_IINIT
} from './constants'

const defaultState = {
  active: 0,
  IinitiatedList: [
    {
      id: "1",
      name: "艺术家哈哈哈哈",
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
    },
    {
      id: "6",
      name: "艺术家",
      similarityRate: "50%",
    },
    {
      id: "7",
      name: "艺术家",
      similarityRate: "50%",
    },
    {
      id: "8",
      name: "艺术家",
      similarityRate: "50%",
    }
  ],
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
    default:
      return state
  }
}
