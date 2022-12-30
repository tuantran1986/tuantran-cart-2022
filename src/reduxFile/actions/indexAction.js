import * as types from '../constants/indexConstant';

export const addProductToCart = (product, quantity) => {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        product: product,
        quantity: quantity,
    }
}
export const deleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product: product,
    }
}
export const updateQuantityProductInCart = (product, count) => {
    return {
        type: types.UPDATE_QUANTITY_PRODUCT_IN_CART,
        product: product,
        count: count,
    }
}
// 
export const changeMessage = (info) => {
    return {
        type: types.CHANGE_MESSAGE,
        info: info,
    }
}