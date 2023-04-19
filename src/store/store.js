import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import { notesMockApi } from "./notesMockApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import modalStatusSlice from "./modalStatusSlice";

const rootReducer = combineReducers({
  userInfo: userInfoSlice,
  modalStatus: modalStatusSlice,
  [notesMockApi.reducerPath]: notesMockApi.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesMockApi.middleware),
});

export default store;
setupListeners(store.dispatch);
