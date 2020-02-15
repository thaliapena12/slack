import { combineReducers } from "redux";
import modalform from "./modal_form_reducer";
import currentChannel from './current_channel_reducer';
import currentDmgroup from './current_dmgroup_reducer';
export default combineReducers({
  modalform,
  currentChannel,
  currentDmgroup
});
