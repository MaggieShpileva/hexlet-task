import { call, put } from "redux-saga/effects";
import {
  getUserData,
  getUserDataFail,
  getUserDataStart,
  getUserDataSuccess,
  userNotExist,
  wrongPassword,
} from "../Redux/user-data/action";
import { getUserDataWorker } from "../Redux/user-data/worker";
import { userData } from "../types";

type UserResult = {
  isLogin: boolean;
  isPassword: boolean;
  user: userData;
};

export function* getUserDataSaga({
  login,
  password,
}: ReturnType<typeof getUserData>) {
  yield put(getUserDataStart());
  try {
    const res: UserResult = yield call(getUserDataWorker, login, password);
    if (res.isLogin && res.isPassword) {
      yield put(getUserDataSuccess(res.user));
    } else if (res.isLogin === false) {
      yield put(userNotExist());
    } else if (res.isPassword === false) {
      yield put(wrongPassword());
    } else {
      yield put(getUserDataFail());
    }
  } catch (e) {
    console.log(e);
  }
}
