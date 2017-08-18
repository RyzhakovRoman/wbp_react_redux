import {connect} from 'react-redux';

import component from '../components/selectionDatesOfTravel';
import {changeStartDate, changeEndDate} from "../actions/dataActions";

// function checkDate(date) {
//     if (date.length != 10){
//         return
//     }
// }

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        sendStartDateToStateData: (date) => {
            if (date.length !== 10) {
                return
            }
            dispatch(changeStartDate(date))
        },
        sendEndDateToStateData: (date) => {
            if (date.length !== 10) {
                return
            }
            dispatch(changeEndDate(date))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component)