import { combineReducers } from "redux";
import createNewUser from "./AddUser";

const rootReducer = combineReducers({
  createNewUser,
});
export default rootReducer;
