export default function (stateCountryFilterText = '', action) {
    switch (action.type) {
        case 'CHANGE_FILTER_TEXT':
            return action.text;
        default:
            return stateCountryFilterText;
    }
}