import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

export const receiveNewMessage = message => ({
    type: RECEIVE_NEW_MESSAGE,
    message
});

const receiveAllMessages = messages => {
    //debugger;
    return {type: RECEIVE_ALL_MESSAGES,
    messages};
};

export const createMessage = message => dispatch => {
    return MessageAPIUtil.createMessage(message)
        .then(receivedMessage => dispatch(receiveNewMessage(receivedMessage.data)));
};

export const requestAllChannelMessages = (channelId) => dispatch => {
    return MessageAPIUtil.getAllChannelMessages(channelId)
        .then(receivedMessages => dispatch(receiveAllMessages(receivedMessages.data)));
};

export const requestAllDmgroupMessages = (dmgroupId) => dispatch => {
    return MessageAPIUtil.getAllDmgroupMessages(dmgroupId)
        .then(receivedMessages => dispatch(receiveAllMessages(receivedMessages.data)));
};

