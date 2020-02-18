import { connect } from 'react-redux';
import MessageForm from './message_form';
import { fetchUserChannels, fetchUserDmgroups } from '../../actions/user_actions';
import { createMessage } from '../../actions/message_actions';

const mapStateToProps = state => ({
    currentChannel: state.ui.currentChannel,
    currentUser: state.session.user,
    userChannels: state.entities.users.userChannels
});

const mapDispatchToProps = dispatch => ({
    fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
    fetchUserDmgroups: userId => dispatch(fetchUserDmgroups(userId)),
    createMessage: message => dispatch(createMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);