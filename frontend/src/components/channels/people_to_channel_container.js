import { connect } from "react-redux";
import PeopleToChannel from './people_to_channel';
import { closeModalForm } from '../../actions/modal_form_actions';
import { userToChannel } from '../../actions/channel_actions';

const mapStateToProps = state => ({
    currentChannel: state.ui.currentChannel
})

const mapDispatchToProps = dispatch => ({
    closeModalForm: () => dispatch(closeModalForm()),
    addUserToChannel: data => dispatch(userToChannel(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleToChannel);