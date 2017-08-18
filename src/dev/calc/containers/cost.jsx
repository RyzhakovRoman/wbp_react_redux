import {connect} from 'react-redux';

import component from '../components/cost';

function mapStateToProps(state) {
    return {
        cost: getCost(state),
        costRequest: getCostRecuest(state)
    }
}

function mapDicpatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDicpatchToProps
)(component)