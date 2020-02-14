import { getUserChannels } from "../util/user_api_util";
import { getUserDmgroups } from "../util/user_api_util";

export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";
export const RECEIVE_USER_DMGROUPS = "RECEIVE_USER_DMGROUPS";

const receiveUserChannels = channels => ({
  type: RECEIVE_USER_CHANNELS,
  channels
});

const receiveUserDmgroups = dmgroups => ({
  type: RECEIVE_USER_DMGROUPS,
  dmgroups
});

export const fetchUserChannels = userData => dispatch =>
  getUserChannels(userData)
    .then(channels => {
      dispatch(receiveUserChannels(channels.data));
    })
    .catch(err => console.log(err));


export const fetchUserDmgroups = userData => dispatch =>
  getUserDmgroups(userData)
    .then(dmgroups => {
      dispatch(receiveUserDmgroups(dmgroups.data));
    })
      .catch(err => console.log(err));