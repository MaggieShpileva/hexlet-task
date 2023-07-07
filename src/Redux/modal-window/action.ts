import { MODAL_WINDOW } from "./action-types";

export const openModal = () => {
  return {
    type: MODAL_WINDOW.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: MODAL_WINDOW.CLOSE_MODAL,
  };
};
