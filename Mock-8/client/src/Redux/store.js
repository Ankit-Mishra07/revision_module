import { combineReducers, createStore } from "redux";
import { registerReducer } from "./Reducers/userReducer";

const rootReducer = combineReducers({
  registerState: registerReducer,
});

export const store = createStore(rootReducer);
