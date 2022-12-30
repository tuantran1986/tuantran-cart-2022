import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { messageReducer } from './messageReducer';

export const allReducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer,
    messageReducer: messageReducer,
});