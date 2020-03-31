
export const selectChannelMessages= (state, currentChannel) => {
  return currentChannel ? currentChannel.channelMessages.map(id => state.entities.messages[id]) : [];
  };

export const selectChannelUsers = (state, currentChannel) => {
  console.log(`${currentChannel} at selector level`);
  return currentChannel ? currentChannel.channelMembers.map(id =>
    state.entities.users[id]) : [];
};


export const selectDmgroupMessages= (state, currentDmgroup) => {
  return currentDmgroup ? currentDmgroup.dmMessages.map(id => state.entities.messages[id]) : [];
  };

export const selectDmgroupUsers = (state, currentDmgroup) => {
  console.log(`${currentDmgroup} at selector level`);
  return currentDmgroup ? currentDmgroup.dmMembers.map(id =>
    state.entities.users[id]) : [];
};
  
  