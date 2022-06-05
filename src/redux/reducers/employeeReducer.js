import * as types from "../actions/actionTypes.js"

export default function employeeReducer(state = [], action){
    switch(action.type){
        case types.CREATE_EMPLOYEE:
            return [...state, {...action.employee}]
        default:
            return state
    }
}