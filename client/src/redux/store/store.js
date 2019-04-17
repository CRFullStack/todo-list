import { createStore, combineReducers, applyMiddleware } from "redux";
import mathReducer from "../reducers/mathReducer";
import userReducer from "../reducers/userReducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(thunk)
);
