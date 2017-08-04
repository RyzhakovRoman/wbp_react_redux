import { combineReducers } from 'redux'
import todosReducer from './todos'
import visibilityFilterReducer from './visibilityFilter'

export default combineReducers({
    todosReducer,
    visibilityFilterReducer
});