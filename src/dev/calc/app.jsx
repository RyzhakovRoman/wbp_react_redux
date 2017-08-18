import './../calc/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers/index';
import Calc from './components/calc';

let store = createStore(reducers);

store.dispatch({
    type: 'ADD_ARRAY_COUNTRIES',
    countries: ['Таиланд', 'Турция', 'Египет', 'Чехия', 'США', 'ОАЭ', 'Алжир', 'Армения', 'Бельгия', 'Бразилия', 'Болгария', 'Вьетнам', 'Гаити', 'Германия', 'Грузия', 'Дания',  'Индия', 'Ирландия', 'Италия', 'Кипр', 'Казахстан']
});

// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Calc/>
    </Provider>,
    document.getElementById('calc')
);

// let count = 'Таиланд';
// let text = 'Та';
// count.toLowerCase();
// text.toLowerCase();
// console.log(count.toLowerCase().indexOf(text.toLowerCase()));


// let promise = fetch('./../php/calc.php');
//
// promise
//     .then(function (response) {
//         return response.text();
//     })
//     .then(function (resp) {
//         console.dir(JSON.parse(resp))
//     });