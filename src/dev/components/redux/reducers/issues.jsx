export default function(stateIssues = [], action) {
    switch (action.type) {
        case 'ISSUES_LOAD':
            return action.payload;
        default:
            return stateIssues;
    }
}