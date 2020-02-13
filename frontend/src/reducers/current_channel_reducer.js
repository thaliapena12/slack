import { RECEIVE_CURRENT_CHANNEL } from '../actions/channel_actions';

export default function currentChannelReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_CHANNEL:
            return action.channel;
        default:
            return state;
    }
}