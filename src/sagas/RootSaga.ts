import { all, fork, takeEvery } from "redux-saga/effects";
import { USER_DATA } from "../Redux/user-data/action-types";
import { getUserDataSaga } from "./user-saga";

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export function* rootSaga() {
  try {
    yield all([takeEvery(USER_DATA.GET_USER_DATA, getUserDataSaga)]);
  } catch (e) {
    console.log("error in root saga", e);
  }
}
