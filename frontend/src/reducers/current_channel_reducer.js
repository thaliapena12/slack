import { RECEIVE_CURRENT_CHANNEL, RECEIVE_NEW_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_USER_CHANNELS } from "../actions/user_actions";
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

export default function currentChannelReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_CHANNEL:
            return action.channel;
        case RECEIVE_USER_CHANNELS:
            return action.channels[0];
        case RECEIVE_USER_LOGOUT:
            return null;
        case RECEIVE_NEW_CHANNEL:
            return action.channel.data;
        default:
            return state;
    }
}