import { combineReducers } from 'redux'
import { maxResultsReducer } from './maxResults'
import { bookListReducer } from './networkRequests'

const rootReducer = combineReducers({
    maxResults: maxResultsReducer,
    bookList: bookListReducer
})

export default rootReducer
