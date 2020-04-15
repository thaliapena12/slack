import {
  RECEIVE_CHANNELS,
  RECEIVE_USER_CREATED_CHANNELS,
  RECEIVE_NEW_CHANNEL,
  REMOVE_CHANNEL
} from "../actions/channel_actions";

const ChannelsReducer = (
  state = { all: {}, userCreatedChannels: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      newState.all = action.channels.data;
      return newState;
    case RECEIVE_USER_CREATED_CHANNELS:
      newState.userCreatedChannels = action.channels;
      return newState;
    case RECEIVE_NEW_CHANNEL:
      newState.new = action.channel.data;
      newState.userCreatedChannels.push(action.channel.data);
      return newState;
    case REMOVE_CHANNEL:
      delete newState.all[action.channelId];
      delete newState.userCreatedChannels[action.channelId];
      return newState;
    default:
      return state;
  }
};

export default ChannelsReducer;
