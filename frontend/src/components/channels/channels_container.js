import { connect } from "react-redux";
import { fetchChannels } from "../../actions/channel_actions";
import Channels from "./channels";

const mapStateToProps = state => {
  return {
    channels: state.channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
