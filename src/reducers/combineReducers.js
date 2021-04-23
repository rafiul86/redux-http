import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { fetchReducer } from "./fetchReducer";


export default combineReducers({
   fetch :  fetchReducer ,
   count :  countReducer
})