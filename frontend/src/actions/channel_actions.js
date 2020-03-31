import { 
  getChannels, 
  getChannel, 
  deleteChannel, 
  getUserCreatedChannels, 
  createChannel,
  addUserToChannel
} from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_USER_CREATED_CHANNELS = "RECEIVE_USER_CREATED_CHANNELS";
export const RECEIVE_NEW_CHANNEL = "RECEIVE_NEW_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const receiveCurrentChannel = channel => ({
  type: RECEIVE_CURRENT_CHANNEL,
  channel
});

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const receiveUserCreatedChannels = channels => ({
  type: RECEIVE_USER_CREATED_CHANNELS,
  channels
});

const receiveNewChannel = channel => ({
  type: RECEIVE_NEW_CHANNEL,
  channel
});

const removeChannel = channelId => ({
    type: REMOVE_CHANNEL,
    channelId  
});

export const fetchChannels = () => dispatch =>
  getChannels()
    .then(channels => dispatch(receiveChannels(channels)))
    .catch(err => console.log(err));

export const fetchChannel = channelId => dispatch =>
  getChannel(channelId)
    .then(channel => dispatch(receiveNewChannel(channel)))
    .catch(err => console.log(err));

export const fetchUserCreatedChannels = id => dispatch =>
         getUserCreatedChannels(id)
           .then(channels => {
             dispatch(receiveUserCreatedChannels(channels.data));
           })
           .catch(err => dispatch(receiveErrors(err.response.data)));
    

export const generateChannel = data => dispatch => (
  createChannel(data)
    .then(channel => dispatch(receiveNewChannel(channel)))
    .catch(err => (dispatch(receiveErrors(err.response.data))))
);

export const obliterateChannel = channelId => dispatch => (
         deleteChannel(channelId)
           .then(() => dispatch(removeChannel(channelId)))
           .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const userToChannel = data => dispatch => {
  return addUserToChannel(data)
    .then(receivedChannel => dispatch(receiveChannel(receivedChannel)))
};
