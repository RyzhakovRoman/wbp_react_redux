import React from 'react';

import FilterBar from './productTable/containers/FilterBar';
import ProductTable from './productTable/containers/ProductTable';
import FormAdded from './productTable/containers/FormAdded';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <FilterBar/>
                <ProductTable/>
                <FormAdded/>
            </div>
        );
    }
}