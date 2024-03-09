import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import AlertMessageReducer from "./AlertMessage/reducer";
import TMDefinitionReducer from "./TMDefinition/reducer";

const rootReducer = combineReducers({
  AlertMessage: AlertMessageReducer,
  TMDefinition: TMDefinitionReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// @ts-expect-error immediately
export const store = createStore(rootReducer, applyMiddleware(thunk));
