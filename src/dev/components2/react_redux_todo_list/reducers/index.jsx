import { combineReducers } from 'redux'
import todosReducer from './todos'
import visibilityFilterReducer from './filter'

export default combineReducers({
    todosReducer,
    visibilityFilterReducer
});