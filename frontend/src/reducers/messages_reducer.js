import { RECEIVE_NEW_MESSAGE, RECEIVE_ALL_MESSAGES } from '../actions/message_actions';

const MessagesReducer = (
    state = {},
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_NEW_MESSAGE:
            newState[action.message.id] = action.message;
            return newState;
        case RECEIVE_ALL_MESSAGES:            
            return Object.assign(newState, action.messages);
        default:
            return state;
    }
};

export default MessagesReducer;