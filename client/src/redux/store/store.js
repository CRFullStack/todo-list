import { createStore, combineReducers, applyMiddleware } from "redux";
import mathReducer from "../reducers/mathReducer";
import userReducer from "../reducers/userReducer";
import addTaskReducer from "../reducers/addTaskReducer";
import listReducer from "../reducers/listReducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    userReducer,
    addTaskReducer,
    listReducer
  }),
  {},
  applyMiddleware(thunk)
);
