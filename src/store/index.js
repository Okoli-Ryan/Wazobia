import { createStore, combineReducers } from "redux";
import { languageReducer } from "./reducers/";

const rootReducer = combineReducers({
  languageReducer,
});

const store = createStore(rootReducer);

export default store;
