export default function (stateProducts = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...stateProducts, action.product];
        case 'DELETE_PRODUCT':
            let newState = [...stateProducts];
            newState.splice(action.id, 1);
            return newState;
        default:
            return stateProducts;
    }
}