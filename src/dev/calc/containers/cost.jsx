import {connect} from 'react-redux';

import component from '../components/cost';
import {changeRequestStateToSuccess, changeRequestStateToError, changeRequestStateToLoaded, changeCostValue} from "../actions/costActions";

function checkDataForCalculation(data) {
    return !!(data.country && data.dateOfBirth && data.startDate && data.endDate);
}

function calculateCost(dispatch, data) {
    if (checkDataForCalculation(data)) {
        dispatch(changeRequestStateToLoaded());

        let promise = fetch('/webpack/php/calc.php');
        promise
            .then(function (response) {
                let prms = response.text();
                prms.then(function (resp) {
                    console.log('стоимость расчитана', JSON.parse(resp));
                    let cost = JSON.parse(resp).cost;
                    dispatch(changeRequestStateToSuccess());
                    dispatch(changeCostValue(cost));
                });
            });
    }
}

function mapStateToProps(state) {
    return {
        cost: state.cost.value,
        costRequestStatus: state.cost.requestState,
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendRequestForCostCalculation: (data) => {
            console.log('sent');
            calculateCost(dispatch, data);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component)