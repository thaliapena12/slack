import { getChannels, getChannel, deleteChannel, getUserChannels, createChannel} from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";
export const RECEIVE_NEW_CHANNEL = "RECEIVE_NEW_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";


export const receiveChannels = channels => l({
  type: RECEIVE_CHANNELS,
  channels
});

// export const receiveChannel = channel => ({
//   type: RECEIVE_USER_CHANNEL,
//   channel
// });

export const receiveUserChannels = channels => ({
  type: RECEIVE_USER_CHANNELS,
  channels
});

export const receiveNewChannel = channel => ({
  type: RECEIVE_NEW_CHANNEL,
  channel
});

export const removeChannel = channelId => ({
    type: REMOVE_CHANNEL,
    channelId  
})

export const fetchChannels = () => dispatch =>
  getChannels()
    .then(channels => dispatch(receiveChannels(channels)))
    .catch(err => console.log(err));

export const fetchChannel = channelId => dispatch =>
  getChannel(channelId)
    .then(channel => dispatch(receiveNewChannel(channel)))
    .catch(err => console.log(err));

export const fetchUserChannels = id => dispatch =>
  getUserChannels(id)
    .then(channels => dispatch(receiveUserChannels(channels)))
    .catch(err => console.log(err));

export const createChannel = data => dispatch =>
  createChannel(data)
    .then(channel => dispatch(receiveNewChannel(channel)))
    .catch(err => console.log(err));

export const deleteChannel = channelId => dispatch =>
  deleteChannel(channelId)
    .then(() => dispatch(deleteChannel(channelId)))
    .catch(err => console.log(err));
