import {
  RECEIVE_CHANNELS,
  RECEIVE_USER_CHANNELS,
  RECEIVE_NEW_CHANNEL,
  REMOVE_CHANNEL
} from "../actions/channel_actions";

const ChannelsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      newState.all = action.channels.data;
      return newState;
    case RECEIVE_USER_CHANNELS:
      newState.user = action.channels.data;
      return newState;
    case RECEIVE_NEW_CHANNEL:
      newState.new = action.channel.data;
      return newState;
    case REMOVE_CHANNEL:
      delete newState[action.channelId];
      return newState;
    default:
      return state;
  }
};

export default ChannelsReducer;
