import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChannelsDelete from "./channels_delete";
import {
  obliterateChannel,
  fetchUserCreatedChannels,
  removeErrors,
  receiveErrors,
  receiveCurrentChannel
} from "../../actions/channel_actions";
import {
  openModalForm,
  closeModalForm
} from "../../actions/modal_form_actions";

const mapStateToProps = state => ({
  userChannels: state.entities.users.userChannels,
  currentUser: state.session.user,
  userCreatedChannels: state.entities.channels,
  formType: "Delete Channel",
  currentChannel: state.ui.currentChannel
  // errors: Object.values(state.errors.channel)
});

const mapDispatchToProps = dispatch => ({
  action: channels => dispatch(obliterateChannel(channels)),
  fetchUserCreatedChannels: userId => dispatch(fetchUserCreatedChannels(userId)),
  closeModalForm: () => dispatch(closeModalForm()),
  selectChannel: channel => dispatch(receiveCurrentChannel(channel)),
  // removeErrors: () => dispatch(removeErrors()),
  // errors: () => dispatch(receiveErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsDelete);
