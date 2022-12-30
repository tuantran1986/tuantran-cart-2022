// rfc
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { changeMessage, deleteProductInCart, updateQuantityProductInCart } from '../reduxFile/actions/indexAction';
import * as msg from '../reduxFile/constants/message';

export default function CartListContainer() {
    // 
    let cartProducts = useSelector(state => state.cartReducer);
    // console.log(cartProducts);
    let dispatch = useDispatch();

    // 
    const deleteProduct = (product) => {
        dispatch(deleteProductInCart(product));
        dispatch(changeMessage(msg.MSG_DELETE_PRODUCT_IN_CART_SUCCESS));
    } 
    // 
    const updateQuantityProduct = (product, count) => {
        dispatch(updateQuantityProductInCart(product, count));
        dispatch(changeMessage(msg.MSG_UPDATE_QUANTITY_PRODUCT_IN_CART_SUCCESS));
    } 

    // 
    return (cartProducts && cartProducts.length
        ?
        <CartList 
            cartProducts={cartProducts} 
            deleteProduct={deleteProduct} 
            updateQuantityProduct={updateQuantityProduct} 
        />
        :
        <h4 style={{textAlign: 'center'}}>CHƯA CÓ SP NÀO TRONG GIỎ HÀNG.</h4>)
}