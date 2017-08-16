import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers/index';
import Calc from './components/calc';

let store = createStore(reducers);

store.dispatch({
    type: 'ADD_ARRAY_COUNTRIES',
    countries: ['Таиланд', 'Турция', 'Египет', 'Чехия', 'Бразилия', 'США', 'ОАЭ']
});

console.log(store.getState());

// ReactDOM.render(
//     <Provider store={store}>
//         <Calc/>
//     </Provider>,
//     document.getElementById('calc')
// );


let promise = fetch('./../php/calc.php');
promise.then(function (response) {
    alert('ee');
},
    )
console.dir(promise);