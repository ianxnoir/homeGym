import {courseListAction} from './actions'
import {CourseListState} from './state'


const initialState: CourseListState= null

export function courseListReducer(state:CourseListState = initialState,action:courseListAction){
    if(action.type === '@@courselist/getCourseList'){
        return action.result
        
    }
    return state
}