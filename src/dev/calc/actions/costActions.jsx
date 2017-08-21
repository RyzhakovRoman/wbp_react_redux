export function changeRequestStateToSuccess() {
    return {
        type: 'CHANGE_TO_SUCCESS',
        requestState: 'success'
    }
}

export function changeRequestStateToError() {
    return {
        type: 'CHANGE_TO_ERROR',
        requestState: 'error'
    }
}

export function changeRequestStateToLoaded() {
    return {
        type: 'CHANGE_TO_LOADED',
        requestState: 'loaded'
    }
}

export function changeCostValue(cost) {
    return {
        type: 'CHANGE_COST_VALUE',
        value: cost
    }
}

// export function calculateCost() {
//    
// }