import {combineReducers} from "redux";
import employees from "./employeeReducer.js";

const rootReducer = combineReducers({
    employees
})

export default rootReducer