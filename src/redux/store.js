import displayReducer from "./reducer";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import persistConfig from "./persistConfig";

// const rootReducer = combineReducers({
//   persistedReducer,
//   displayReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(createLogger()))
// );

const store = createStore(
  displayReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);

// export const persistor = persistStore(store);

export default store;
