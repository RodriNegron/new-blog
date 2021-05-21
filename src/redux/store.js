import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { sessionService } from "redux-react-session";
import reducers from "./reducers/index";

const initialState = {};
const middlewares = [thunk];
const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middlewares)),
);

sessionService.initSessionService(store);

export default store;
