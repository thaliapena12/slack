import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserList } from "../../util/user_api_util";
import DmgroupsForm from "./dmgroups_form";
import { generateDmgroup, removeErrors, receiveCurrentDmgroup } from "../../actions/dmgroup_actions";
import { openModalForm, closeModalForm } from "../../actions/modal_form_actions";

const mapPropsToState = state => ({

  currentUser: state.session.user,
  dmgroups: state.entities.users.userDmgroups

});

const mapDispatchToProps = dispatch => ({
  generateDmgroup: usersIds => dispatch(generateDmgroup(usersIds)),
  selectDmgroup: dmgroup => dispatch(receiveCurrentDmgroup(dmgroup)),
  closeModalForm: () => dispatch(closeModalForm()),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapPropsToState, mapDispatchToProps)(DmgroupsForm);
