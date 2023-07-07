import { configureStore, createStore } from "@reduxjs/toolkit";
import { userDataReducer } from "./user-data/reducer";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/RootSaga";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { modalWindowReducer } from "./modal-window/reducer";
const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
  const Store = configureStore({
    reducer: {
      userData: userDataReducer,
      modal: modalWindowReducer,
    },
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);

  return Store;
};
export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export const store = makeStore();
