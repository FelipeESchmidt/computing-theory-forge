import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import recorderReducer from "./Recorder/reducer";

const rootReducer = combineReducers({});

export type IRootState = ReturnType<typeof rootReducer>;

// @ts-expect-error immediately
export const store = createStore(rootReducer, applyMiddleware(thunk));
