import { combineReducers } from "redux";
import { etherReducer } from "./etherReducer";

export const rootReducer = combineReducers({
  ethereum: etherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
