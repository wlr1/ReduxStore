import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slices/filter/slice";
import cartReducer from "./Slices/cart/slice";
import pizzasReducer from "./Slices/pizza/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    pizzasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
