import React from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import FormAddedProduct from './FormAddedProduct';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
            products: props.products
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
        this.handleAddedProduct = this.handleAddedProduct.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    handleAddedProduct(newProduct) {
        console.dir(newProduct);
        this.state.products.push(newProduct);
        this.setState(this.state);
    }

    handleDeleteProduct(productDeleted) {
        const index = this.state.products.indexOf(productDeleted);
        this.state.products.splice(index, 1);
        this.setState({products: this.state.products});
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onDeleteProduct={this.handleDeleteProduct}
                />
                <FormAddedProduct onAddProduct={this.handleAddedProduct}/>
            </div>
        );
    }
}