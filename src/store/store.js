import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...middlewares));

const store = configureStore({
  reducer: rootReducer,
  composeEnhancers,
});

export default store;

// import { compose, applyMiddleware, createStore } from "redux";
// import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";

// const middlewares = [logger];

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(...middlewares))
// );

// export default store;
