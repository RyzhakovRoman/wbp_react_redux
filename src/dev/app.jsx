'use strict';

import './menu/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';






// // ----------------------------------react + redux фильтрируемая таблица, папка с компонентами - components
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
//
// import reducers from './components/productTable/reducers/reducers';
//
// import App from './components/App';
//
// let store = createStore(reducers);
//
// store.dispatch({
//     type: 'ADD_PRODUCT',
//     product: {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"}
// });
// store.dispatch({
//     type: 'ADD_PRODUCT',
//     product: {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"}
// });
// store.dispatch({
//     type: 'ADD_PRODUCT',
//     product: {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"}
// });
// store.dispatch({
//     type: 'ADD_PRODUCT',
//     product: {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"}
// });
// store.dispatch({
//     type: 'ADD_PRODUCT',
//     product: {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"}
// });
// store.dispatch({
//     type: 'ADD_PRODUCT',
//     product: {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// });
// // console.log(store.getState());
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('cont')
// );
// // ----------------------------------end















// ------------------------пример для comp
// import todoApp from './components2/react_redux_todo_list/reducers/index';
// import App from './components2/react_redux_todo_list/App';
//
// let store = createStore(todoApp);
//
// store.dispatch(
//     {
//         type: 'ADD_TODO',
//         id: 0,
//         text: 'Задача 0',
//         completed: false
//     }
// );
// store.dispatch(
//     {
//         type: 'ADD_TODO',
//         id: 1,
//         text: 'Задача 1',
//         completed: true
//     }
// );
// store.dispatch(
//     {
//         type: 'ADD_TODO',
//         id: 2,
//         text: 'Задача 2',
//         completed: false
//     }
// );
// store.dispatch(
//     {
//         type: 'ADD_TODO',
//         id: 3,
//         text: 'Задача 3',
//         completed: true
//     }
// );
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('cont')
// );
































// import React from 'react';
// import store from './components/redux/store';
// console.log({...{df: 'dfd'}, ...{re:'erer'}});
//------------------------------------------reducer
// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT_COUNTER':
//             return Object.assign(state, {counter: (state.counter +1)});
//             break;
//         case 'RESET_COUNTER':
//             return Object.assign(state, {counter: 0});
//             break;
//         case 'ISSUES_LOAD':
//             return Object.assign(state, {issues: action.payload});
//             break;
//         default:
//             return state;
//             break;
//     }
// }
//------------------------------------------end_reducer
//
//------------------------------------------store
// const store = createStore(reducer, {counter: 0, issues: [], repository: ''});
//------------------------------------------end_store
//------------------------------------------store_subscribe
// store.subscribe(() => {
//     console.log('store changed', store.getState());
// });
// ------------------------------------------store_subscribe
// ------------------------------------------store_dispatch
// console.log(1);
// store.dispatch({
//     type: 'INCREMENT_COUNTER'
// });
// console.log(2);
// store.dispatch({
//     type: 'INCREMENT_COUNTER'
// });
// console.log(3);
// store.dispatch({
//     type: 'RESET_COUNTER'
// });
// console.log(4);
// store.dispatch({
//     type: 'UNKNOWN'
// });
// console.log(5);
// store.dispatch({
//     type: 'ISSUES_LOAD',
//     payload: [
//         {id: 1, name: 'first issues'},
//         {id: 2, name: 'second issues'}
//     ]
// });
// ------------------------------------------end_store_dispatch









// const ADD_TODO = 'ADD_TODO';
// //------------------------------------------actions
// let addPhone = function (phone) {
//     return {
//         type: "ADD_PHONE",
//         phone
//     }
// };
// let deletePhone = function (phone) {
//     return {
//         type: "DELETE_PHONE",
//         phone
//     }
// };
// //------------------------------------------end_actions
//
// //------------------------------------------todo_component
// class Todoo extends React.Component {
//     render() {
//         return (
//             <li onClick={this.props.onClick}>
//                 {this.props.text}
//             </li>
//         )
//     }
// }
// //------------------------------------------end_todo_component
//
// //------------------------------------------todo_list_component
// class TodoList extends React.Component {
//     render() {
//         return (
//             <ul>
//
//             </ul>
//         )
//     }
// }
// //------------------------------------------end_todo_list_component













// let actToggle = {
//     type: TOGGLE_TODO,
//     index:5
// };

// let actVisibility = {
//     type: SET_VISIBILITY_FILTER,
//     filter: SHOW_COMPLETED
// };


























































// const propsValues = {
//     title: "Список смартфонов",
//     items: [
//         "HTC U Ultra",
//         "iPhone 7",
//         "Google Pixel",
//         "Hawei P9",
//         "Meizu Pro 6",
//         "Asus Zenfone 3"
//     ]
// };
//
// class Item extends React.Component {
//     render(){
//         return  <li>{this.props.name}</li>
//     }
// }
//
// class Menu extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             items: this.props.data.items
//         };
//         this.filterList = this.filterList.bind(this);
//     }
//     filterList(e){
//         let filteredList = this.props.data.items.filter(function(item){
//             return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
//         });
//         this.setState({
//             items: filteredList
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <input onChange={this.filterList} placeholder="Search"/>
//                 <ul>
//                     {
//                         this.state.items.map(function (item) {
//                             return <Item key={item} name={item}/>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Menu data={propsValues}/>,
//     document.getElementById('cont')
// );







// let sl = location.pathname.lastIndexOf('/');
// let point = location.pathname.lastIndexOf('.');
// let moduleName = location.pathname.slice(sl, point);
//
// let route = require('.' + moduleName);
//
// console.log(moduleName);
//
// console.log(route);









// document.getElementById('btn').addEventListener('click', function () {
//     require.ensure([], function () {
//         let Menu = require('./menu/menu');
//
//         let myMenu = new Menu.default('PANDA');
//
//         console.log('app.js');
//
//         console.dir(myMenu);
//         document.getElementById('menu').appendChild(myMenu.elem);
//     });
// });

