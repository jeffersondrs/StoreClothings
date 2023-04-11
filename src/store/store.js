import { compose, applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";

const logger = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  let result = next(action);

  return result;
};

const middlewares = [logger];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
