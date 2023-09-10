import {
  configureStore,
  combineReducers,
  PreloadedState
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ChangeInputSlice from "./ChangeInputSlice";

/* export const rootReducer = combineReducers({
  todo: ChangeInputSlice
}) */


 export const store = configureStore({
  reducer: {
    ChangeInputSlice,
  },
});
 

/* export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
} */


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
