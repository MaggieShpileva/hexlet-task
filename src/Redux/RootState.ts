import { ModalT } from "./modal-window/reducer";
import { UserDataT } from "./user-data/reducer";

export type RootState = {
  userData: UserDataT;
  modal: ModalT;
};
