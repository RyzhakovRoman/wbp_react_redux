export default function (stateFilterText = '', action) {
    switch (action.type) {
        case 'FILTER_TEXT':
            return action.text;
        default:
            return stateFilterText;
    }
}