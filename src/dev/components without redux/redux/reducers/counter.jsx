export default function(stateCounter = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return stateCounter + 1;
        case 'RESET_COUNTER':
            return 0;
        default:
            return stateCounter;
    }
}
