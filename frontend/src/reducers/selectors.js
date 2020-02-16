
export const selectChannelMessages= (state, currentChannel) => {
  return currentChannel ? currentChannel.channelMessages.map(id => state.entities.messages[id]) : [];
  };

export const selectChannelUsers = (state, currentChannel) => {
  console.log(`${currentChannel} at selector level`);
  return currentChannel ? currentChannel.channelMembers.map(id =>
    state.entities.users[id]) : [];
};
  