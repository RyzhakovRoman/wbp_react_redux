import {combineReducers} from 'redux';

import countriesReducer from './countriesReducer';
// import downloadCountriesReducer from './downloadCountriesReducer';
import countryFilterTextReducer from './countryFilterTextReducer';
import dataReducer from './dataReducer';
import costReducer from './costReducer'

export default combineReducers({
    countries: countriesReducer,
    countryFilterText: countryFilterTextReducer,
    data: dataReducer,
    cost: costReducer
    // downloadCountries: downloadCountriesReducer
})