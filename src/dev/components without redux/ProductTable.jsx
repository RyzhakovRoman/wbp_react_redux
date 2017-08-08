import React from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;
        let i = 0;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category + i} />);
                i++;
            }
            // console.log(this);
            rows.push(<ProductRow product={product} onDeleteProduct={this.props.onDeleteProduct} key={i} />);
            lastCategory = product.category;
            i++;
        });
        // console.dir(rows);
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}