import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import AlertMessageReducer from "./AlertMessage/reducer";
import AuthenticationReducer from "./Authentication/reducer";
import LanguageReducer from "./Language/reducer";
import TMDefinitionReducer from "./TMDefinition/reducer";
import TMProgrammingReducer from "./TMProgramming/reducer";
import TMRunnableReducer from "./TMRunnable/reducer";

const rootReducer = combineReducers({
  AlertMessage: AlertMessageReducer,
  Authentication: AuthenticationReducer,
  Language: LanguageReducer,
  TMDefinition: TMDefinitionReducer,
  TMProgramming: TMProgrammingReducer,
  TMRunnable: TMRunnableReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// @ts-expect-error immediately
export const store = createStore(rootReducer, applyMiddleware(thunk));
