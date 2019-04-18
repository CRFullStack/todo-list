import { createStore, combineReducers, applyMiddleware } from "redux";
import mathReducer from "../reducers/mathReducer";
import userReducer from "../reducers/userReducer";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({ mathReducer, userReducer, reducer }),
  {},
  applyMiddleware(thunk)
);
