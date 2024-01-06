import{NoticeAction} from "./actions"
import{NoticeState} from "./state"
const initialState: NoticeState = {
    list:null,
}


export function noticeReducer(state:NoticeState = initialState, action:NoticeAction){
    if(action.type === "@@notice/getNotification"){
        return{
            list:action.list
        }
    }

    return state
}