import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChannelsForm from "./channels_form";
import { generateChannel, removeErrors } from "../../actions/channel_actions";
import {
  openModalForm,
  closeModalForm
} from "../../actions/modal_form_actions";

const mapStateToProps = state => ({
  channel: {
    channelMembers: [],
    channelMessages: [],
    name: "",
    description: "",
    accessType: false,
    createdBy: ""
  },
  currentUser: state.session.user,
  formType: "New Channel",
  errors: Object.values(state.errors.channel)
  // console.log(errors.channel)
});

const mapDispatchToProps = dispatch => ({
  action: channel => dispatch(generateChannel(channel)),
  closeModalForm: () => dispatch(closeModalForm()),
  removeErrors: () => dispatch(removeErrors())
  // errors: () => dispatch(receiveErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsForm);



