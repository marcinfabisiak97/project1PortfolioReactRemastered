import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modalReducer from "./slices/modalSlice/modalSlice";
import dataReducer from "./slices/dataSlice/dataSlice";
import formModalReducer from "./slices/formModalSlice/formModalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    data: dataReducer,
    formModal: formModalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
