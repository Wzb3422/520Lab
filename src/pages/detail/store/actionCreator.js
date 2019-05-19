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
            choice: hischoice, // hischoice
            content: questionList.data[item - 1].options[map[hischoice]]
          },
          his: {
            choice: yourchoice,
            content: questionList.data[item - 1].options[map[yourchoice]]
          }
        })
        return null
      })
      console.log(result)
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