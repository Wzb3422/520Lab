import { combineReducers } from 'redux'
import { reducer as archiveReducer } from '../pages/archivepage/store'
import { reducer as newReducer } from '../pages/new/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers({
  archive: archiveReducer,
  new: newReducer,
  detail: detailReducer
})

export default reducer
