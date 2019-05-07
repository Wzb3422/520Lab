import { combineReducers } from 'redux'
import { reducer as archiveReducer } from '../pages/archivepage/store'
import { reducer as newReducer } from '../pages/new/store'

const reducer = combineReducers({
  archive: archiveReducer,
  new: newReducer
})

export default reducer
