import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DmgroupsForm from "./dmgroups_form";
import { generateDmgroup, removeErrors } from "../../actions/dmgroup_actions";
import { openModalForm, closeModalForm } from "../../actions/modal_form_actions";

const mapStateToProps = state => ({
  dmgroups: {
    dmgroupMembers: [],
    dmgroupMessages: []
  },
  currentUser: state.session.user,
  formType: "Direct Messages",
  errors: Object.values(state.errors.dmgroup)
});

const mapDispatchToProps = dispatch => ({
  action: dmgroup => dispatch(generateDmgroup(dmgroup)),
  closeModalForm: () => dispatch(closeModalForm()),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(DmgroupsForm);
