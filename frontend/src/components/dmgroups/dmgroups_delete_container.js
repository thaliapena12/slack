import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DmgroupsDelete from "./dmgroups_delete";
import { obliterateDmgroup, removeErrors, receiveErrors, receiveCurrentDmgroup } from "../../actions/dmgroup_actions";
import { openModalForm, closeModalForm } from "../../actions/modal_form_actions";

const mapStateToProps = state => ({
  userDmgroups: state.entities.users.userDmgroups,
  currentUser: state.session.user,
  formType: "Delete Direct Messages",
  currentDmgroup: state.ui.currentDmgroup
});

const mapDispatchToProps = dispatch => ({
  action: dmgroups => dispatch(obliterateDmgroup(dmgroups)),
  closeModalForm: () => dispatch(closeModalForm()),
  selectDmgroup: dmgroup => dispatch(receiveCurrentDmgroup(dmgroup)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DmgroupsDelete);
