import {connect} from 'react-redux';

import component from '../components/countrySelectionBar';
// import {addArrayCountries} from '../actions/countriesActions';
// import {setStateDownloadStartedCountry, setStateCountriesLoaded, setStateLoadingError} from '../actions/downloadCountriesActions';
import {changeCountryFilterText} from "../actions/countryFilterTextActions";

// function downloadData(dispatch) {
//     dispatch(setStateDownloadStartedCountry());
//
//     let promise = fetch('./../php/calc.php');
//     promise
//         .then((response) => {
//             console.log('success');
//             return response.text();
//         })
//         .then((resp) => {
//
//             let arrayCountries = JSON.parse(resp);
//             dispatch(setStateCountriesLoaded());
//             dispatch(addArrayCountries(arrayCountries))
//         })
//         .catch((error) => {
//             console.log('error');
//             dispatch(setStateLoadingError());
//         });
// }

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
    return {
        countries: getListOfEligibleCountries(state.countries, state.countryFilterText),
        data: state.data
        // downloadCountries: state.downloadCountries
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // downloadListCountries: () => {
        //     dispatch
        // }

        sendFilterTextToState: (text) => {
            console.log('send');
            dispatch(changeCountryFilterText(text))
        }

        // downloadCountriesInServer: () => {
        //     downloadData(dispatch);
        // }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component)