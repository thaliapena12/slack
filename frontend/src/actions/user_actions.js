import { getUserChannels } from "../util/user_api_util";

export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";

const receiveUserChannels = channels => ({
  type: RECEIVE_USER_CHANNELS,
  channels
});

export const fetchUserChannels = userData => dispatch =>
  getUserChannels(userData)
    .then(channels => {
      dispatch(receiveUserChannels(channels.data));
    })
    .catch(err => console.log(err));
