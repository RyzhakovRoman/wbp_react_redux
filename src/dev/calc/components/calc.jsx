import React from 'react';

import CountrySelectionBar from './../containers/countrySelectionBar';
import SelectionDatesOfTravel from './../containers/selectionDatesOfTravel';
import SelectionDateOfBirth from './../containers/selectionDateOfBirth';
import Cost from './../containers/cost';

export default class Calc extends React.Component {
    render() {
        return (
            <div>
                <CountrySelectionBar/>
                <SelectionDatesOfTravel/>
                <SelectionDateOfBirth/>
                <Cost/>
            </div>
        )
    }
}