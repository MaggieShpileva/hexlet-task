import { USER_DATA } from "./action-types";

import * as actions from "./action";
import { InferValueTypes } from "../../sagas/RootSaga";
import { userData } from "../../types";
type Actions = ReturnType<InferValueTypes<typeof actions>>;

export type UserDataT = {
  isLoading: boolean;
  data?: userData;
  message?: string;
};

const initialState: UserDataT = {
  isLoading: false,
};

export const userDataReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case USER_DATA.GET_USER_DATA_START:
      return { isLoading: true };

    case USER_DATA.GET_USER_DATA_SUCCESS:
      return { isLoading: false, data: action.payload };

    case USER_DATA.GET_USER_DATA_FAIL:
      return { isLoading: false };

    case USER_DATA.USER_NOT_EXIST:
      return { message: "Такого пользователя не существует", isLoading: false };

    case USER_DATA.WRONG_PASSWORD:
      return { message: "Неправильный пароль", isLoading: false };

    case USER_DATA.EXIT_USER:
      return { isLoading: false };
    default:
      return state;
  }
};
