export default function (stateInStockOnly = '', action) {
    switch (action.type) {
        case 'FILTER_STOCK_ONLY':
            return action.isStockOnly;
        default:
            return stateInStockOnly;
    }
}