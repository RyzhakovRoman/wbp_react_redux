import {connect} from 'react-redux';
import {setVisibilityFilter} from "../actions/index";
import Link from '../Link';

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;