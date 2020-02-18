import { connect } from "react-redux";
import { fetchUserChannels, fetchUserDmgroups } from "../../actions/user_actions";

import ChannelNav from "./channel_nav";
import { fetchChannels } from "../../actions/channel_actions";

const mapStateToProps = state => {
  return {
    currentChannel: state.ui.currentChannel,
    currentDmgroup: state.ui.currentDmgroup,
    currentUser: state.session.user,
    userChannels: state.entities.users.userChannels,
    userDmGroups: state.entities.users.userDmGroups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
    fetchUserDmgroups: userId => dispatch(fetchUserDmgroups(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelNav);
