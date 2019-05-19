import { createStore, applyMiddleware, compose } from 'redux'
import combinedReducers from './combinedReducers'
import sagas from '../sagas/'
import createSaga from 'redux-saga'

const sagaMiddleware = createSaga()

// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
    combinedReducers,
    compose(
        applyMiddleware(sagaMiddleware)
        // , dev
    )
)

sagaMiddleware.run(sagas)