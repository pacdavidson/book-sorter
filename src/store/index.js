import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

export default function configureStore(initialState) {
    const store = createStore (
        rootReducer,
        initialState,
        compose( applyMiddleware(promiseMiddleware(), thunk)
    ))
    return store
}
