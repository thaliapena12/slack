import { connect } from "react-redux";
import Messages from "./messages";

const mapStateToProps = state => {

    return {
        currentChannel: state.ui.currentChannel, 
        messages: Object.values(state.entities.messages)
    };

};

export default connect(mapStateToProps)(Messages);