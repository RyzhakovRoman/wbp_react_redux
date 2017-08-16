export default function (prevState = [], action) {
    switch (action.type) {
        case 'ADD_ARRAY_COUNTRIES' :
            return prevState.concat(action.countries);
        default :
            return prevState;
    }
}