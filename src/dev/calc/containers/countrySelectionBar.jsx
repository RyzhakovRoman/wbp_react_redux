import {connect} from 'react-redux';

import component from '../components/countrySelectionBar';
import {changeCountryFilterText} from "../actions/countryFilterTextActions";
import {changeCountry} from "../actions/countriesActions";

function getListOfEligibleCountries (countries, text = '') {
    text = text.toLowerCase();

    return countries.filter(function (country) {
        let i = country.toLowerCase().indexOf(text);
        if (!i) {
            return country;
        }
    });
}

function mapStateToProps(state) {
    console.log('C MapS To P', state);
    return {
        countries: getListOfEligibleCountries(state.countries, state.countryFilterText),
        state: state,
        activeCountry: state.data.country,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendFilterTextAndTextToState: (text) => {
            console.log('send');
            dispatch(changeCountryFilterText(text));
            dispatch(changeCountry(text));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component)