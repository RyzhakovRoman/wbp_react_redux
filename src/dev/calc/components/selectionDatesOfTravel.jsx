import React from 'react';

export default class SelectionDatesOfTravel extends React.Component {
    render() {
        console.log('SelectionDatesOfTravel', this.props);
        return (
            <div>
                <span>Введите данные о датах поездки</span>
                <br/>
                <label>C
                    <input onChange={ () => { this.props.sendStartDateToStateData(this.refs.startDate.value) } } ref="startDate" type="text" placeholder="00.00.0000"/>
                </label>
                    <br/>
                <label>По
                    <input onChange={ () => { this.props.sendEndDateToStateData(this.refs.endDate.value) } } ref="endDate"  type="text" placeholder="00.00.0000"/>
                </label>
            </div>
        )
    }
}