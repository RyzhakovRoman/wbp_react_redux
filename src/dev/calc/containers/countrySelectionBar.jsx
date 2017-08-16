import {connect} from 'react-redux';

import component from '../components/countrySelectionBar';
import {addArrayCountries} from '../actions/countriesActions';

function mapStateToProps(state) {
    return {
        countries: state.countries
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sendActionToAddArrayOfCountries: (arrayCountries) => {
            dispatch(addArrayCountries(arrayCountries))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component)