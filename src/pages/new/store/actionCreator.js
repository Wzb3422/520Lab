import {
  CHANGE_SHEET,
  CHANGE_NUM
} from './constants'

export const changeSheetAction = () => ({
  type: CHANGE_SHEET
})

export const changeNumAction = (value) => ({
  type: CHANGE_NUM,
  value
})


export const changeSheetAsyncAction = (e, changeNum) => {
  return dispatch => {
    dispatch(changeSheetAction())
    dispatch(changeNumAction(changeNum))
    setTimeout(
      () => {
        dispatch(changeSheetAction())
      },
      800
    )
  }
}