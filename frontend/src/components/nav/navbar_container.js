
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserCreatedChannels, receiveCurrentChannel } from "../../actions/channel_actions"
import { fetchUserChannels } from '../../actions/user_actions';
import NavBar from './navbar';
import {openModalForm, closeModalForm} from '../../actions/modal_form_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
  userCreatedChannels: state.entities.channels,
  userChannels: state.entities.users.userChannels
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserCreatedChannels: userId =>
  dispatch(fetchUserCreatedChannels(userId)),
  fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
  openModalForm: formType => dispatch(openModalForm(formType)),
  closeModalForm: formType => dispatch(closeModalForm(formType)),
  selectChannel: channel => dispatch(receiveCurrentChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);