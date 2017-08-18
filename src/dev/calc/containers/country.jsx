import {connect} from 'react-redux';

import component from '../components/country';
import {changeCountry} from "../actions/dataActions";

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToState(dispatch) {
    return {
        sendCountryToStateData: (country) => {
            dispatch(changeCountry(country))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToState
)(component)