import { connect } from "react-redux";
import { requestAllChannelMessages } from "../../actions/message_actions";
import Messages from "./messages";
import { //selectChannelMessages, 
         selectChannelUsers } from "../../reducers/selectors";
import { getUserList } from "../../util/user_api_util";


const mapStateToProps = state => {

    const currentChannel = state.ui.currentChannel;


    return {
        loading: false,
        currentChannel,
        currentUser: state.session.user,    
        messages: Object.values(state.entities.messages),
    };

};

const mapDispatchToProps = dispatch => { 
    return {
        requestAllMessages: channelId => dispatch(requestAllChannelMessages(channelId)),
        selectChannelMessages: (state, currentChannel) => dispatch(selectChannelUsers(state, currentChannel))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);