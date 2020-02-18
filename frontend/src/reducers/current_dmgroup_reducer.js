import { RECEIVE_CURRENT_DMGROUP, RECEIVE_DMGROUP } from '../actions/dmgroup_actions';
import { RECEIVE_USER_DMGROUPS } from "../actions/user_actions";
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
import { RECEIVE_NEW_MESSAGE } from "../actions/message_actions";
import { RECEIVE_CURRENT_CHANNEL } from '../actions/channel_actions';

export default function currentDmgroupReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_DMGROUP:
            return action.dmgroup;
        case RECEIVE_USER_DMGROUPS:
            return action.dmgroups[0];
        case RECEIVE_USER_LOGOUT:
            return null;
        case RECEIVE_DMGROUP:
            return action.dmgroup.data;
        case RECEIVE_NEW_MESSAGE:
            const newState = Object.assign({}, state);
            if (Object.values(newState).length) {
                newState.dmMessages.push(action.message);
                return newState;
            } else {
                return null;
            } 
        case RECEIVE_CURRENT_CHANNEL:
            return null;  
        default:
            return state;
    }
}