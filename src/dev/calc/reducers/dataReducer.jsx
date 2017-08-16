export default function (prevState, action) {
    let newState = Object.assign({}, prevState);
    switch (action.type) {
        case 'CHANGE_DATA_COUNTRY' :
            newState.data.country = action.country;
            return newState;
        case 'CHANGE_DATA_DATE_OF_BIRTH' :
            newState.data.dateOfBirth = action.dateOfBirth;
            return newState;
        case 'CHANGE_DATA_START_DATE' :
            newState.data.startDate = action.startDate;
            return newState;
        case 'CHANGE_DATA_END_DATE' :
            newState.data.endDate = action.endDate;
            return newState;
    }
}