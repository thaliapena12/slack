import React from "react";
import { closeModalForm } from "../../actions/modal_form_actions";
import { connect } from "react-redux";
import ChannelsForm from "../channels/channels_form_container";


function ModalForm({ modalform, closeModalForm }) {
  if (!modalform) {
    return null;
  }
  let component;
  switch (modalform) {
    case 'new channel':
      component = <ChannelsForm />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModalForm}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modalform: state.ui.modalform
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModalForm: () => dispatch(closeModalForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
