import { connect } from "react-redux";
import Messages from "./messages";

const mapStateToProps = state => {

    return {
        currentChannel : state.ui.currentChannel,
        currentDmgroup : state.ui.currentDmgroup
    };

};

export default connect(mapStateToProps)(Messages);