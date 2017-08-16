'use strict';

import './menu/style.less';

// ----------------------------------react
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './components/productTable/reducers/reducers';

import App from './components/App';

let store = createStore(reducers);

store.dispatch({
    type: 'ADD_PRODUCT',
    product: {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"}
});
store.dispatch({
    type: 'ADD_PRODUCT',
    product: {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"}
});
store.dispatch({
    type: 'ADD_PRODUCT',
    product: {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"}
});
store.dispatch({
    type: 'ADD_PRODUCT',
    product: {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"}
});
store.dispatch({
    type: 'ADD_PRODUCT',
    product: {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"}
});
store.dispatch({
    type: 'ADD_PRODUCT',
    product: {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
});
// console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('cont')
);
