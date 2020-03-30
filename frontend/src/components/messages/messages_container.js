import { connect } from "react-redux";
import Messages from "./messages";
import { receiveNewMessage } from '../../actions/message_actions';

const mapStateToProps = state => {

    return {

        currentChannel: state.ui.currentChannel, 
        messages: Object.values(state.entities.messages),
        currentDmgroup : state.ui.currentDmgroup,
        currentUser: state.session.user
    };

};

const mapDispatchToProps = dispatch => ({
    receiveMessage: message => dispatch(receiveNewMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);