import { getUserChannels,
         getUserDmgroups,
         getUserList  
        } from "../util/user_api_util";

export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";
export const RECEIVE_USER_DMGROUPS = "RECEIVE_USER_DMGROUPS";

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUserChannels = channels => ({
  type: RECEIVE_USER_CHANNELS,
  channels
});

const receiveUserDmgroups = dmgroups => ({
  type: RECEIVE_USER_DMGROUPS,
  dmgroups
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
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

export const fetchUserList = userList => dispatch =>
{
  return getUserList(userList).then(receivedUsers => dispatch(receiveUsers(receivedUsers)));
};