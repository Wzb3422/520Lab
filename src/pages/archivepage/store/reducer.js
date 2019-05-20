import {
  SWITCH_HEADER,
  TOGGLE_JOIN,
  GET_IJOINED,
  GET_IINIT,
  DETAIL_CLICK,
  CLEAR_DETAILOBJ
} from './constants'

const defaultState = {
  active: 0,
  IinitiatedList: [],
  IjoinedList: [],
  isIjoinedShow: true,
  detailobj: {
    empty: true
  }
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
        let { set_id, questions } = item
        item.all_answers.map(item => {
          list.push({
            set_id,
            name: item.name,
            answers: item.answers,
            score: item.score,
            sex: item.sex,
            questions
          })
          return null
        })
        return null
      })
      newState.IinitiatedList = list
      return newState
    case DETAIL_CLICK:
      let answerstrArr = JSON.stringify(newState.IinitiatedList[action.value].answers).split('')
      let QuestionArr = Object.keys(newState.IinitiatedList[action.value].answers)
      let reg = /(A|B|C|D)/
      let yoursTagArr = answerstrArr.filter(item => reg.test(item))
      let hisTags = JSON.stringify(newState.IinitiatedList[action.value].questions).split('')
      hisTags = hisTags.filter(item => reg.test(item))
      newState.detailobj = {
        QuestionArr,
        yoursTagArr,
        hisTags
      }
      return newState
    case CLEAR_DETAILOBJ:
      newState.detailobj = {
        empty: true
      }
      return newState
    default:
      return state
  }
}
