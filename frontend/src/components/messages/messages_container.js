import { connect } from "react-redux";
import Messages from "./messages";

const mapStateToProps = state => {

    return {
        currentChannel : state.ui.currentChannel
    };

};

export default connect(mapStateToProps)(Messages);