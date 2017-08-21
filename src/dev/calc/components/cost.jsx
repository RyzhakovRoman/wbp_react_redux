import React from 'react';

export default class Cost extends React.Component {
    getRequestState() {
        return (this.props.costRequestStatus == 'success') ? 'Цена усешно расчитана' :
               (this.props.costRequestStatus == 'error') ? 'Ошибка расчета' :
               (this.props.costRequestStatus == 'loaded') ? 'Цена расчитывается' :
               'Цена не запрашивалась';
    }
    render() {
        console.log('Cost', this.props);
        return (
            <div>
                <span>{this.getRequestState()}</span>
                <br/>
                <span>{this.props.cost} руб.</span>
                <button onClick={()=>{this.props.sendRequestForCostCalculation(this.props.data)}}>Расчитать</button>
            </div>
        )
    }
}