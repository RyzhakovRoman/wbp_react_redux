import React from 'react';
import FilterLink from './containers/FilterLink';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <p>
                Show: {" "}
                <FilterLink filter="SHOW_ALL">
                    ALL
                </FilterLink>
                {", "}
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {", "}
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
            </p>
        )
    }
}

export default Footer;