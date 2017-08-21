import React from 'react';

import Country from '../containers/country';

export default class countrySelectionBar extends React.Component {
    render() {
        console.log('countrySelectionBar', this.props);

        let tagListOfCountries = this.props.countries.map(function (country, i) {
            return <Country key={i} nameCountry={country}/>
        });

        return (
            <div>
                <span>Введите страну</span>
                <br/>
                <input type="text" ref="country" onChange={() => {this.props.sendFilterTextAndTextToState(this.refs.country.value)}} value={this.props.activeCountry}/>
                <ul className="ul">
                    {tagListOfCountries}
                </ul>
            </div>
        )
    }
}