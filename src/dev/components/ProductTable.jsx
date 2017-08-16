import React from 'react';
import Product from './ProductRow';
import Category from './ProductCategoryRow';

export default class ProductTable extends React.Component {

    render() {
        let rows = [];
        let lastCategory = '';
        let i = 0;

        this.props.products.forEach((product, index) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<Category category={product.category} key={product.category + i} />);
                i++;
            }
            rows.push(<Product product={product} handlerDeletedProduct={()=>this.props.handlerDeletedProduct(index)} key={i} />);
            lastCategory = product.category;
            i++;
        });

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