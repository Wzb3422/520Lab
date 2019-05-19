import {
  GET_QUES_TEXT,
  CLEAR_DETAILOBJ
} from './constants'
import get from '../../../lib/get'

export const getQuestionTextAction = (value) => ({
  type: GET_QUES_TEXT,
  value
})

export const getQuestonTextAsyncAction = (token, obj) => {
  return dispatch => {
    new Promise(resolve => {
      let questionList = get('/api/question', token)
      resolve(questionList)
    })
    .then(questionList =>{
      const map = {A: 0, B: 1, C: 2, D: 3}
      let result = []
      obj.QuestionArr.map((item ,index) => {
        let { question } = questionList.data[item - 1]
        let yourchoice = obj.yoursTagArr[index]
        let hischoice = obj.hisTags[index]
        result.push({
          question,
          yours: {
            choice: yourchoice,
            content: questionList.data[item - 1].options[map[yourchoice]]
          },
          his: {
            choice: hischoice,
            content: questionList.data[item - 1].options[map[hischoice]]
          }
        })
        return null
      })
      dispatch(getQuestionTextAction(result))
    })
    .catch(err => {
      throw new Error(err)
    })
  }
}

export const clearDetailobjAction = () => ({
  type: CLEAR_DETAILOBJ
})