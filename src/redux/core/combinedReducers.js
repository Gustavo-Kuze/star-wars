import { combineReducers } from 'redux'
import charactersReducer from './reducers/charactersReducer'

export default combineReducers({
    characters: charactersReducer
})