import { connect } from "react-redux";
import { fetchUserDmgroups } from "../../actions/user_actions";
import DmgroupNav from "./dmgroup_nav";

const mapStateToProps = state => {
  return {
    currentDmgroup: state.ui.currentDmgroup,
    currentUser: state.session.user,
    userDmgroups: state.entities.users.userDmgroups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserDmgroups: userId => dispatch(fetchUserDmgroups(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DmgroupNav);
