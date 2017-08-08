import React from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../actions/productsActions';

class FormAdded extends React.Component {
    constructor(props) {
        super(props);
        this.handlerAddedProduct = this.handlerAddedProduct.bind(this);
    }

    handlerAddedProduct(e) {
        e.preventDefault();
        let newProduct = {
            category: this.refs.category.value,
            name: this.refs.name.value,
            price: this.refs.price.value,
            stocked: this.refs.stocked.checked,
        };
        this.props.dispatch(addProduct(newProduct))
    }

    render() {
        return (
            <div>
                <input ref="category" type="text" placeholder="категория" required /><br/>
                <input ref="name" type="text" placeholder="наименование" required /><br/>
                <label>в наличии
                    <input ref="stocked" type="checkbox" required  />
                </label><br/>
                <input ref="price" type="text" placeholder="цена" required />
                <button onClick={this.handlerAddedProduct}>Добавить продукт</button>
            </div>
        )
    }
}

export default connect()(FormAdded);