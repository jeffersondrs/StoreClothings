import { compose, applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middlewares = [logger];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);


