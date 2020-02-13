import { connect } from "react-redux";
import { fetchUserChannels } from "../../actions/user_actions";
import ChannelNav from "./channel_nav";

const mapStateToProps = state => {
  return {
    currentChannel: state.ui.currentChannel,
    currentUser: state.session.user,
    userChannels: state.entities.users.userChannels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserChannels: userId => dispatch(fetchUserChannels(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelNav);
