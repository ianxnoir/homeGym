import { CardAction } from "./actions"
import { CardState } from "./state";



const initialState: CardState = {
    result: null,
    count:1
}


export function cardReducer(state: CardState = initialState, action: CardAction) {
    if (action.type === "@@ptCards/getCards") {

        return {
            ...state,
            result: action.result,
            count: action.count
        }

    }
    if (action.type === '@@ptCards/getSearchCard'){
        return{
            result: action.result,
            count:null
        }
    }

    return state
}