import * as types from '../constants/indexConstant';
import * as msg from '../constants/message';

const initStateMessage = msg.MSG_WELCOME;

export const messageReducer = (state = initStateMessage, action) => {
    let { info } = action;
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            state = info;
            return state;

        default:
            return state;
    }
}