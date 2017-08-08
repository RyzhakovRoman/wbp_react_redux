import {connect} from 'react-redux';
import {setVisibilityFilter} from "../actions/index";
import Link from '../Link';

function mapStateToProps(state, ownProps) {
    console.log('map State To Props Filter Link');
    console.log(state);
    console.log(ownProps);

    return {
        active: ownProps.filter === state.visibilityFilterReducer
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log('map Dispatch To Props Filter Link');
    console.log(ownProps);

    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;