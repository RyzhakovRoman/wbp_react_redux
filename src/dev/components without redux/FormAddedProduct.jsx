import React from 'react';

export default class FormAddedProduct extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddedProductButtonClick = this.handleAddedProductButtonClick.bind(this);
    }

    handleAddedProductButtonClick() {
        let newState = {
            category: this.refs.category.value,
            name: this.refs.name.value,
            price: this.refs.price.value,
            stocked: this.refs.stocked.checked,
        };

        this.props.onAddProduct(newState);
    }

    render() {
        return (
            <div>
                <input ref="category" type="text" placeholder="категория" /><br/>
                <input ref="name" type="text" placeholder="наименование" /><br/>
                <label>в наличии
                    <input ref="stocked" type="checkbox" />
                </label><br/>
                <input ref="price" type="text" placeholder="цена" />
                <button onClick={this.handleAddedProductButtonClick}>add</button>
            </div>
        )
    }
}