
import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import ChannelErrorsReducer from './channel_form_errors_reducer';
import DmgroupErrorsReducer from './dmgroup_form_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  channel: ChannelErrorsReducer,
  dmgroup: DmgroupErrorsReducer
});