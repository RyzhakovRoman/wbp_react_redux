import {combineReducers} from 'redux';

import productsReducer from './products';
import filterTextReducer from './textFilter';
import inStockOnlyReducer from './inStockOnly';


export default combineReducers({
    productsReducer,
    filterTextReducer,
    inStockOnlyReducer
})