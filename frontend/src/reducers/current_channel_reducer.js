import { RECEIVE_CURRENT_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_USER_CHANNELS } from "../actions/user_actions";

export default function currentChannelReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_CHANNEL:
            return action.channel;
        case RECEIVE_USER_CHANNELS:
            return action.channels[0];
        default:
            return state;
    }
}