import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import AlertMessageReducer from "./AlertMessage/reducer";
import TMDefinitionReducer from "./TMDefinition/reducer";
import TMProgrammingReducer from "./TMProgramming/reducer";

const rootReducer = combineReducers({
  AlertMessage: AlertMessageReducer,
  TMDefinition: TMDefinitionReducer,
  TMProgramming: TMProgrammingReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// @ts-expect-error immediately
export const store = createStore(rootReducer, applyMiddleware(thunk));
