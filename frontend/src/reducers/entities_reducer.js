import { combineReducers } from "redux";
import channels from "./channel_reducer";
import dmgroups from "./dmgroup_reducer";
import users from "./users_reducer";
import messages from "./messages_reducer";

export default combineReducers({
  channels,
  users,
  dmgroups,
  messages
});
