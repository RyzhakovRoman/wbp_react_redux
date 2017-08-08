export function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}
export function deleteProduct(id) {
    return {
        type: 'DELETE_PRODUCT',
        id
    }
}