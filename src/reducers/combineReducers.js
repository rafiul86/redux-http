import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { fetchReducer } from "./fetchReducer";


export  const allReducer = combineReducers({
   fetch :  fetchReducer ,
   count :  countReducer
})