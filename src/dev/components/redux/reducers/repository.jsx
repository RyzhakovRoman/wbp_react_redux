export default function (stateRepository, action) {
    switch (action.type) {
        case 'CHANGE_REPOSITORY':
            return 'new repository';
        default:
            return stateRepository;
    }
}