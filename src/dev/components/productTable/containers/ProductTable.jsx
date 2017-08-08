import {connect} from 'react-redux';

import ProductTable from '../../ProductTable';
import {deleteProduct} from '../actions/productsActions';

function mapStateToProps(state) {
    return {
        products: state.productsReducer,
        filterText: state.filterTextReducer,
        inStockOnly: state.filterInStockOnlyReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handlerDeletedProduct: (idProduct) => {
            dispatch(deleteProduct(idProduct))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTable);