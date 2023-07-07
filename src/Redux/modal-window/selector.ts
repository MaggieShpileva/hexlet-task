import { RootState } from "../RootState";

export const selectModal = (state: RootState) => {
  return state.modal;
};
