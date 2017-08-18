import React from 'react';

export default class Country extends React.Component {
    render() {
        return (
            <li onClick={() => { this.props.sendCountryToStateData(this.props.nameCountry) }}>{ this.props.nameCountry }</li>
        )
    }
}