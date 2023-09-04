import { RootState } from "../../store";

export const selectFilterSort = (state: RootState) => state.filterReducer.sort;
export const selectFilter = (state: RootState) => state.filterReducer;
