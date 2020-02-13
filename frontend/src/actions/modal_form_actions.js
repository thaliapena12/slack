export const OPEN_MODAL_FORM = "OPEN_MODAL_FORM";
export const CLOSE_MODAL_FORM = "CLOSE_MODAL_FORM";

export const openModalForm = modalform => {
  return {
    type: OPEN_MODAL_FORM,
    modalform
  };
};

export const closeModalForm = () => {
  return {
    type: CLOSE_MODAL_FORM
  };
};
