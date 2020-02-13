import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChannelsForm from "./channels_form";
import { generateChannel } from "../../actions/channel_actions";
import {
  openModalForm,
  closeModalForm
} from "../../actions/modal_form_actions";

const mapStateToProps = state => ({
  channel: {
    channelMembers: [],
    channelMessages:[],
    name: "",
    description: "",
    accessType: false,
    createdBy: ""
  },
  currentUser: state.session.user,
  formType: "New Channel"
});

const mapDispatchToProps = dispatch => ({
  action: channel => dispatch(generateChannel(channel)),
  closeModalForm: () => dispatch(closeModalForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsForm);
