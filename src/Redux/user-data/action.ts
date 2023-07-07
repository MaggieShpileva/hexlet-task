import { userData } from "../../types";
import { USER_DATA } from "./action-types";

export const getUserData = (payload: { login: string; password: string }) => {
  return {
    type: USER_DATA.GET_USER_DATA,
    ...payload,
  };
};

export const getUserDataStart = () => {
  return {
    type: USER_DATA.GET_USER_DATA_START,
  };
};

export const getUserDataSuccess = (payload: userData) => {
  return {
    type: USER_DATA.GET_USER_DATA_SUCCESS,
    payload,
  };
};

export const getUserDataFail = () => {
  return {
    type: USER_DATA.GET_USER_DATA_FAIL,
  };
};

export const userNotExist = () => {
  return {
    type: USER_DATA.USER_NOT_EXIST,
  };
};

export const wrongPassword = () => {
  return {
    type: USER_DATA.WRONG_PASSWORD,
  };
};

export const exitUser = () => {
  return { type: USER_DATA.EXIT_USER };
};
