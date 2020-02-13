import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";

const receiveNewMessage = message => ({
    type: RECEIVE_NEW_MESSAGE,
    message
});

export const createMessage = message => dispatch => {
    return MessageAPIUtil.createMessage(message)
        .then(receivedMessage => dispatch(receiveNewMessage(receivedMessage.data)));
};