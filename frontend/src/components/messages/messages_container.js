import { connect } from "react-redux";
import Messages from "./messages";
import { receiveNewMessage } from '../../actions/message_actions';
import { generateDmgroup } from "../../actions/dmgroup_actions";
import { receiveCurrentDmgroup } from "../../actions/dmgroup_actions";

const mapStateToProps = state => {

    return {

        currentChannel: state.ui.currentChannel, 
        messages: Object.values(state.entities.messages),
        currentDmgroup : state.ui.currentDmgroup,
        currentUser: state.session.user,
        dmgroups: state.entities.users.userDmgroups
    };

};

const mapDispatchToProps = dispatch => ({
    receiveMessage: message => dispatch(receiveNewMessage(message)),
    generateDmgroup: userIds => dispatch(generateDmgroup(userIds)),
    selectDmgroup: dmgroup => dispatch(receiveCurrentDmgroup(dmgroup)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);