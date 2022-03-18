import { combineReducers } from "redux";
import receiveReducer from ".";
import selectedReducer from './selectedReducer'


export default combineReducers({selectedReducer,receiveReducer})