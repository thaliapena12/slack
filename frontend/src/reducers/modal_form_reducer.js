import {
  OPEN_MODAL_FORM,
  CLOSE_MODAL_FORM
} from "../actions/modal_form_actions";

export default function modalFormReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL_FORM:
      return action.modalform;
    case CLOSE_MODAL_FORM:
      return null;
    default:
      return state;
  }
}
