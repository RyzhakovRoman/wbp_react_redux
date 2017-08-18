import {connect} from 'react-redux';

import component from '../components/selectionDateOfBirth';
import {changeDateOfBirth} from "../actions/dataActions";

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        sendDateOfBirthToStateData: (date) => {
            if (date.length !== 10) {
                return
            }
            dispatch(changeDateOfBirth(date))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component)