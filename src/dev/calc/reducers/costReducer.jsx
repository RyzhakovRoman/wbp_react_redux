export default function (prevState = {}, action) {
    let newState = Object.assign({}, prevState);
    switch (action.type) {
        case 'CHANGE_COST_COUNTRY' :
            newState.country = action.country;
            return newState;
        case 'CHANGE_DATA_DATE_OF_BIRTH' :
            newState.dateOfBirth = action.dateOfBirth;
            return newState;
        default:
            return prevState;
    }
}