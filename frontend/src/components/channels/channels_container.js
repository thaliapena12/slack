import { connect } from "react-redux";
import { fetchChannels } from "../../actions/channel_actions";
import Channels from "./channels";

const mapStateToProps = state => {
  return {
    channels: Object.values(state.channels.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
