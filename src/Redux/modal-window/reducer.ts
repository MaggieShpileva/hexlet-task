import { MODAL_WINDOW } from "./action-types";

import * as actions from "./action";
import { InferValueTypes } from "../../sagas/RootSaga";
type Actions = ReturnType<InferValueTypes<typeof actions>>;

export type ModalT = {
  isOpen: boolean;
};

const initialState: ModalT = {
  isOpen: false,
};

export const modalWindowReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case MODAL_WINDOW.OPEN_MODAL:
      return { isOpen: true };
    case MODAL_WINDOW.CLOSE_MODAL:
      return { isOpen: false };
    default:
      return state;
  }
};
