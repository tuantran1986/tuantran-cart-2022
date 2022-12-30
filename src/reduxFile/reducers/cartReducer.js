import * as types from '../constants/indexConstant';

const cartLocal = JSON.parse(localStorage.getItem('cart'));

const initStateCart = (cartLocal && cartLocal.length ? cartLocal : []);

const findIndexProductFromCart = (stateCart, productFind) => {
    let result = -1;
    stateCart.forEach((item, index) => {
        if (item.product.id === productFind.id) {
            result = index;
        }
    });

    return result;
}

export const cartReducer = (state = initStateCart, action) => {
    let { product, quantity, count } = action;
    console.log('action', action);

    // 
    switch (action.type) {
        case types.ADD_PRODUCT_TO_CART:
            let stateAdd = [...state];
            let indexAdd = findIndexProductFromCart(stateAdd, product);
            if (indexAdd !== -1) {
                // TH1 - TĂNG SỐ LƯỢNG
                stateAdd[indexAdd].quantity++;
            } else {
                // TH2 - THÊM MỚI
                stateAdd.push({
                    product: product,
                    quantity: quantity,
                });
            }
            // LƯU LOCALSTORAGE
            localStorage.setItem('cart', JSON.stringify(stateAdd));
            state = [...stateAdd];
            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            let stateDelete = [...state];
            let indexDelete = findIndexProductFromCart(stateDelete, product);
            if (indexDelete !== -1) {
                stateDelete.splice(indexDelete, 1);
            }
            // LƯU LOCALSTORAGE
            localStorage.setItem('cart', JSON.stringify(stateDelete));
            state = [...stateDelete];
            return [...state];

        case types.UPDATE_QUANTITY_PRODUCT_IN_CART:
            let stateUpdate = [...state];
            let indexUpdate = findIndexProductFromCart(stateUpdate, product);
            if (indexUpdate !== -1) {
                // TH - số lượng = 0, thì không giảm số lượng nữa !
                if (stateUpdate[indexUpdate].quantity === 0 && count === -1) {
                    alert(`số lượng sp ${stateUpdate[indexUpdate].product.name} = 0`);            
                } else {
                    stateUpdate[indexUpdate].quantity += count;    
                }
            } 
            // LƯU LOCALSTORAGE
            localStorage.setItem('cart', JSON.stringify(stateUpdate));
            state = [...stateUpdate];
            return [...state];

        default:
            return [...state];
    }
}