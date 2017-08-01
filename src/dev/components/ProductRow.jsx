import React from 'react';

export default class ProductRow extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    }
    handleDeleteBtnClick() {
        this.props.onDeleteProduct(this.props.product);
    }
    render() {
        let name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
                <td><button onClick={this.handleDeleteBtnClick}>удалить</button></td>
            </tr>
        );
    }
}