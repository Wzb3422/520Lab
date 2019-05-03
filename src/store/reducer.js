import { combineReducers } from 'redux'
import { reducer as archiveReducer } from '../pages/archivepage/store'

const reducer = combineReducers({
  archive: archiveReducer
})

export default reducer
