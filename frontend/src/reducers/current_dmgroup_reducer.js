import { RECEIVE_CURRENT_DMGROUP, RECEIVE_DMGROUP } from '../actions/dmgroup_actions';
import { RECEIVE_USER_DMGROUPS } from "../actions/user_actions";
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

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
        default:
            return state;
    }
}