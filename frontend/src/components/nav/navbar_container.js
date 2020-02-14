
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserCreatedChannels, receiveCurrentChannel, obliterateChannel } from "../../actions/channel_actions"
import { fetchUserChannels } from '../../actions/user_actions';
import { fetchUserDmgroups } from '../../actions/user_actions';
import NavBar from './navbar';
import {openModalForm, closeModalForm} from '../../actions/modal_form_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
  userCreatedChannels: state.entities.channels,
  userChannels: state.entities.users.userChannels,
  userDmgroups: state.entities.users.userDmgroups
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserCreatedChannels: userId =>
  dispatch(fetchUserCreatedChannels(userId)),
  fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
  fetchUserDmgroups: userId => dispatch(fetchUserDmgroups(userId)),
  openModalForm: formType => dispatch(openModalForm(formType)),
  closeModalForm: formType => dispatch(closeModalForm(formType)),
  selectChannel: channel => dispatch(receiveCurrentChannel(channel)),
  obliterateChannel: channelId => dispatch(obliterateChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);