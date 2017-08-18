import React from 'react';

import Country from '../containers/country';

export default class countrySelectionBar extends React.Component {

    // outputConsole() {
    //     console.log(this.refs.country.value);
    // }

    render() {
        console.log('countrySelectionBar', this.props);

        let tagListOfCountries = this.props.countries.map(function (country, i) {
            return <Country key={i} nameCountry={country}/>
        });

        return (
            <div>
                <span>Введите страну</span>
                <br/>
                <input type="text" ref="country" onChange={() => { this.props.sendFilterTextToState(this.refs.country.value) }}/>
                <ul className="ul">
                    {tagListOfCountries}
                </ul>
            </div>
        )
    }
}