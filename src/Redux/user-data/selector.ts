import { RootState } from "../RootState";

export const selectUserData = (state: RootState) => {
  return state.userData;
};
