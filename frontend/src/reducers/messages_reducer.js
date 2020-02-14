import { RECEIVE_NEW_MESSAGE } from '../actions/message_actions';

const MessagesReducer = (
    state = {},
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_NEW_MESSAGE:
            newState[action.message._id] = action.message;
            return newState;
        default:
            return state;
    }
};

export default MessagesReducer;