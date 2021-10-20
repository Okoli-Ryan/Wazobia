import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  languageReducer,
  categoryReducer,
  topicListReducer,
  categoryListReducer,
  searchReducer,
  dataReducer,
  topicReducer,
  bookmarkReducer,
} from "./reducers";

const rootReducer = combineReducers({
  languageReducer,
  categoryReducer,
  topicListReducer,
  bookmarkReducer,
  categoryListReducer,
  searchReducer,
  dataReducer,
  topicReducer,
});

const persistConfig = {
  key: "key0",
  storage: AsyncStorage,
  whitelist: [
    "topicListReducer",
    "categoryListReducer",
    "dataReducer",
    "bookmarkReducer",
  ], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer);

const persistor = persistStore(store);

export { store, persistor };
