import { connect } from "react-redux";
import Messages from "./messages";

const mapStateToProps = state => {

    return {

        currentChannel: state.ui.currentChannel, 
        messages: Object.values(state.entities.messages),
        currentDmgroup : state.ui.currentDmgroup

    };

};

export default connect(mapStateToProps)(Messages);