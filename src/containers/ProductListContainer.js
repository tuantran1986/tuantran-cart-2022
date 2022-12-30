// rfc
import React from 'react';
import * as msg from '../reduxFile/constants/message';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import { addProductToCart, changeMessage } from '../reduxFile/actions/indexAction';

// CONTAINER: lên store lấy STATE + truyền vào COMPONENT
// CONTAINER - ở giữa STORE + COMPONENT
export default function ProductListContainer() {
    let productList = useSelector(state => state.productReducer);
    // 
    let dispatch = useDispatch();

    const handleAddProductToCart = (product, quantity) => {
        dispatch(addProductToCart(product, quantity));          // thêm sp vào cart
        dispatch(changeMessage(msg.MSG_ADD_TO_CART_SUCCESS));   // thông báo
    }

    // 
    return (
        <ProductList
            productList={productList}
            handleAddProductToCart={handleAddProductToCart}
        />
    )
}
