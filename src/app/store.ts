import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";
import logger from "redux-logger";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
// export type RootState = ReturnType<typeof store.getState>;
