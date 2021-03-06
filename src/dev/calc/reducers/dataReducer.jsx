export default function (prevState = {}, action) {
    let newState = Object.assign({}, prevState);
    switch (action.type) {
        case 'CHANGE_DATA_COUNTRY' :
            newState.country = action.country;
            return newState;
        case 'CHANGE_DATA_DATE_OF_BIRTH' :
            newState.dateOfBirth = action.dateOfBirth;
            return newState;
        case 'CHANGE_DATA_START_DATE' :
            newState.startDate = action.startDate;
            return newState;
        case 'CHANGE_DATA_END_DATE' :
            newState.endDate = action.endDate;
            return newState;
        default:
            return prevState;
    }
}