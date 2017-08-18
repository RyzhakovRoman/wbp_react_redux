import React from 'react';

export default class SelectionDateOfBirth extends React.Component {
    render() {
        console.log('SelectionDateOfBirth', this.props);
        return (
            <label>
                <span>Дата рождения</span>
                <br/>
                <input onChange={ () => { this.props.sendDateOfBirthToStateData(this.refs.dateOfBirth.value) } } ref="dateOfBirth" type="text" placeholder="00.00.0000"/>
            </label>
        )

    }
}