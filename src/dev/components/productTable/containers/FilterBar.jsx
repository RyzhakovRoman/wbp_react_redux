import React from 'react';
import {connect} from 'react-redux';
import {filterProducts} from '../actions/filtersActions'

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleFilterStockOnlyInputChange = this.handleFilterStockOnlyInputChange.bind(this);
    }

    handleFilterTextInputChange() {
        let text = this.refs.filterText.value;
        this.props.dispatch(filterProducts(text))
    }

    handleFilterStockOnlyInputChange() {
        let isStockOnly = this.refs.filterStockOnly.checked;
        this.props.dispatch(filterProducts(isStockOnly))
    }

    render() {
        return (
            <div>
                <input ref="filterText" onChange={this.handleFilterTextInputChange} type="text" placeholder="Search..."/>
                <p>
                    <input ref="filterStockOnly" onChange={this.handleFilterStockOnlyInputChange} type="checkbox"/> Показать товар только по акции
                </p>
            </div>
        )
    }
}

export default connect()(FilterBar);