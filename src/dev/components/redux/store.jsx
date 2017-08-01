import {createStore, combineReducers} from 'redux';

import reducerCounter from './reducers/counter';
import reducerIssues from './reducers/issues';
import reducerRepository from './reducers/issues';

function reducer(state, action) {

    return combineReducers({
        counter: reducerCounter,
        issues: reducerIssues,
        repository: reducerRepository
    })


    //-----2
    // return {
    //     counter: reducerCounter(state.counter, action),
    //     issues: reducerIssues(state.issues, action),
    //     repository: state.repository
    // };


    //-----1
    // switch (action.type) {
    //     case 'INCREMENT_COUNTER':
    //         return Object.assign(state, {counter: (state.counter +1)});
    //
    //     case 'RESET_COUNTER':
    //         return Object.assign(state, {counter: 0});
    //
    //     case 'ISSUES_LOAD':
    //         return Object.assign(state, {issues: action.payload});
    //
    //     default:
    //         return state;
    //
    // }
}

const store = createStore(reducer, {counter: 0, issues: [], repository: ''});

export default store;