import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserList } from "../../util/user_api_util";
import DmgroupsForm from "./dmgroups_form";
import { generateDmgroup, removeErrors } from "../../actions/dmgroup_actions";
import { openModalForm, closeModalForm } from "../../actions/modal_form_actions";

const mapDispatchToProps = dispatch => ({
  generateDmgroup: dmgroup => dispatch(generateDmgroup(dmgroup)),
  closeModalForm: () => dispatch(closeModalForm()),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(null, mapDispatchToProps)(DmgroupsForm);
