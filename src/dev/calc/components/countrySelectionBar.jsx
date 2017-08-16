import React from 'react';

export default class countrySelectionBar extends React.Component {
    render() {
        console.log(this.props);
        return (
            <select>
                <option value="1">11</option>
                <option value="2">22</option>
                <option value="3">33</option>
            </select>
        )
    }
}