// import { Hash } from "crypto";
import { UserAction } from "./actions"
import { UserState } from "./state";



const initialState: UserState = {
    id: null,
    displayname: null,
    email: null,
    role: null,
    height: null,
    weight: null,
    frequency_id: null,
    focus_id:null,
    goal_id:null,
    gender:null,
    pt_id:null
}



export function userReducer(state: UserState = initialState, action: UserAction) {
    if (action.type === "@@user/getuserinfo") {

        return {
            ...state,
            id: action.id,
            displayname: action.displayname,
            email: action.email,
            role: action.role,
            height: action.height,
            weight: action.weight,
            frequency_id: action.frequency_id,
            focus_id:action.focus_id,
            goal_id:action.goal_id,
            gender: action.gender,
            pt_id: action.pt_id

        }
    }

    if(action.type === "@@user/clearuserinfo"){
        return{
    id: null,
    displayname: null,
    email: null,
    role: null,
    height: null,
    weight: null,
    frequency_id: null,
    focus_id:null,
    goal_id:null,
    gender:null,
    pt_id:null


}
        }
    

    return state
}
