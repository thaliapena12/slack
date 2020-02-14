import { getDmgroups, getDmgroup, createDmgroup, deleteDmgroup} from "../util/dmgroup_api_util";
export const REMOVE_DMGROUP = "REMOVE_DMGROUP";
export const RECEIVE_DMGROUP = "RECEIVE_DMGROUP";
export const RECEIVE_DMGROUPS = "RECEIVE_DMGROUPS";
export const RECEIVE_DMGROUP_ERRORS = "RECEIVE_DMGROUP_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_DMGROUP_ERRORS,
  errors
});

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};

const receiveDmgroups = dmgroups => ({
  type: RECEIVE_DMGROUPS,
  dmgroups
});

const receiveDmgroup = dmgroup => ({
  type: RECEIVE_DMGROUP,
  dmgroup
});

const removeDmgroup = dmgroupId => ({
    type: REMOVE_DMGROUP,
    dmgroupId  
});

export const fetchDmgroup = dmgroupId => dispatch =>
  getDmgroup(dmgroupId)
    .then(dmgroup => dispatch(receiveDmgroup(dmgroup)))
    .catch(err => console.log(err));


export const generateDmgroup = data => dispatch =>
  createDmgroup(data)
    .then(dmgroup => dispatch(receiveDmgroup(dmgroup)))
    .catch(err => (dispatch(receiveErrors(err.response.data))));

export const obliterateDmgroup = dmgroupId => dispatch =>
  deleteDmgroup(dmgroupId)
      .then(() => dispatch(removeDmgroup(dmgroupId)))
      .catch(err => dispatch(receiveErrors(err.response.data)));

export const fetchDmgroups = () => dispatch =>
  getDmgroups()
    .then(dmgroups => dispatch(receiveDmgroups(dmgroups)))
    .catch(err => console.log(err));