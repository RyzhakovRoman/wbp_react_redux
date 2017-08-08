export function filterProducts(isStockOnly) {
    return {
        type: 'FILTER_STOCK_ONLY',
        isStockOnly
    }
}