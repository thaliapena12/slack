import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DmgroupsForm from "./dmgroups_form";
import { fetchUserList } from "../../actions/user_actions";
import { generateDmgroup, removeErrors } from "../../actions/dmgroup_actions";
import { openModalForm, closeModalForm } from "../../actions/modal_form_actions";

const mapStateToProps = state => ({
  dmgroup: {
    members: [],
    dmMessages: []
  },
  
  userList: Object.values(state.entities.users),
  // users: state.entities.users,
  currentUser: state.session.user,
  formType: "Direct Messages",
  errors: Object.values(state.errors.dmgroup)
});

const mapDispatchToProps = dispatch => ({
  generateDmgroup: dmgroup => dispatch(generateDmgroup(dmgroup)),
  closeModalForm: () => dispatch(closeModalForm()),
  removeErrors: () => dispatch(removeErrors()),
  fetchUserList: userList => dispatch(fetchUserList(userList))
});

export default connect(mapStateToProps, mapDispatchToProps)(DmgroupsForm);
