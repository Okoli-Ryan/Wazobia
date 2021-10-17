import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  languageReducer,
  categoryReducer,
  dataReducer,
  searchReducer,
  topicReducer,
} from "./reducers";

const rootReducer = combineReducers({
  languageReducer,
  categoryReducer,
  dataReducer,
  searchReducer,
  topicReducer,
});

const persistConfig = {
  key: "key0",
  storage: AsyncStorage,
  whitelist: ["dataReducer"], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer);

const persistor = persistStore(store);

export { store, persistor };
