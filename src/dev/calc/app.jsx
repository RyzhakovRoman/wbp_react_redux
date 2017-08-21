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

ReactDOM.render(
    <Provider store={store}>
        <Calc/>
    </Provider>,
    document.getElementById('calc')
);
