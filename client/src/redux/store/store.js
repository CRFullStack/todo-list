import { createStore, combineReducers, applyMiddleware } from "redux";
import addTaskReducer from "../reducers/addTaskReducer";
import listReducer from "../reducers/listReducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    addTaskReducer,
    listReducer
  }),
  {},
  applyMiddleware(thunk)
);
