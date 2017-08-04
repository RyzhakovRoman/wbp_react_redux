import {createStore} from 'redux';

const store = createStore(
    reducer,
    {
        value: ''
    }
);

export default store;























//-----Подключение 2
// import {createStore} from 'redux';
// import reducer from './reducers/index';
//
// const store = createStore(reducer, {counter: null, issues: [], repository: ''});
//
// export default store;


//-----Подключение 1
// import {createStore, combineReducers} from 'redux';
// import reducerCounter from './reducers/counter';
// import reducerIssues from './reducers/issues';
// import reducerRepository from './reducers/repository';
// function reducer(state, action) {
//     return combineReducers({
//         counter: reducerCounter,
//         issues: reducerIssues,
//         repository: reducerRepository
//     })
// }


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