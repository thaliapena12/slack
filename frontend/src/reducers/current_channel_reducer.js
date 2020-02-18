import { RECEIVE_CURRENT_CHANNEL, RECEIVE_NEW_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_USER_CHANNELS } from "../actions/user_actions";
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
import { RECEIVE_NEW_MESSAGE } from '../actions/message_actions';
import { RECEIVE_CURRENT_DMGROUP } from "../actions/dmgroup_actions";

export default function currentChannelReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_CHANNEL:
            return action.channel;
        case RECEIVE_CURRENT_DMGROUP:
            return null;
        case RECEIVE_USER_CHANNELS:
            return action.channels[0];
        case RECEIVE_USER_LOGOUT:
            return null;
        case RECEIVE_NEW_CHANNEL:
            return action.channel.data;
        case RECEIVE_NEW_MESSAGE:
            const newState = Object.assign({}, state);
            newState.channelMessages.push(action.message);            
        default:
            return state;
    }
}