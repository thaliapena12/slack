import { RECEIVE_DMGROUPS, RECEIVE_DMGROUP, REMOVE_DMGROUP } from "../actions/dmgroup_actions";
  
  const DmgroupsReducer = (
    state = { all: {}, new: undefined },
    action
  ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_DMGROUPS:
        newState.all = action.dmgroups.data;
        return newState;
      case RECEIVE_DMGROUP:
        newState.new = action.dmgroup.data;
        return newState;
      case REMOVE_DMGROUP:
        delete newState.all[action.dmgroupId];
        return newState;
      default:
        return state;
    }
  };
  
  export default DmgroupsReducer;