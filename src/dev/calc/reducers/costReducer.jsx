export default function (prevState = {value: 0, requestState: 'notRequested'}, action) {
    let newState = Object.assign({}, prevState);
    switch (action.type) {
        case 'CHANGE_TO_SUCCESS' :
            newState.requestState = action.requestState;
            return newState;
        case 'CHANGE_TO_ERROR' :
            newState.requestState = action.requestState;
            return newState;
        case 'CHANGE_TO_LOADED' :
            newState.requestState = action.requestState;
            return newState;
        case 'CHANGE_COST_VALUE' :
            newState.value = action.value;
            return newState;
        default :
            return prevState;
    }
}