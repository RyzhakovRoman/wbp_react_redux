import {combineReducers} from 'redux';

import productsReducer from './products';
import filterTextReducer from './textFilter';
import filterInStockOnlyReducer from './inStockOnly';


export default combineReducers({
    productsReducer,
    filterTextReducer,
    filterInStockOnlyReducer
})