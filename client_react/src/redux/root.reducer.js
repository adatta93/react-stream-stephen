import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { reducer } from "redux-form";
import { streamReducer } from "./stream.reducer";

export default combineReducers({
  auth: authReducer,
  form: reducer,
  streams: streamReducer
});