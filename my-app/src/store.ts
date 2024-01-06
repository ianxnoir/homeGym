import { connectRouter, RouterState, routerMiddleware } from "connected-react-router";
import { combineReducers, compose, createStore, applyMiddleware } from "redux"
import { createBrowserHistory } from 'history'
import { UserState } from './redux/user/state';
import { NoticeState } from './redux/notification/state'
import { IAuthState } from './auth/reducers'
import { CardState } from './redux/ptCards/state'
import{CourseListState} from './redux/courseList/state'
import { userReducer } from "./redux/user/reducers";
import { authReducer } from './auth/reducers'
import { noticeReducer } from "./redux/notification/reducers";
import { cardReducer } from "./redux/ptCards/reducers"
import{courseListReducer} from './redux/courseList/reducers'
import thunk from 'redux-thunk';
// import{IAuthActions} from './auth/actions'

// import { UserAction } from "./redux/user/actions";

// import { ptReducer}  from "./redux/match/reducer";
// import thunk, {ThunkDispatch as OldThunkDispatch} from 'redux-thunk';
// import { AuthActions } from "./auth/actions";

export const history = createBrowserHistory();




export interface RootState {
    auth: IAuthState,
    userReducer: UserState,
    noticeReducer: NoticeState
    router: RouterState,
    cardReducer: CardState,
    courseListReducer: CourseListState
}

// type RootAction = UserAction | IAuthState | CallHistoryMethodAction

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    userReducer: userReducer,
    noticeReducer: noticeReducer,
    cardReducer: cardReducer,
    courseListReducer: courseListReducer,
    router: connectRouter(history),

})


declare global {
    /* tslint:disable:interface-name */
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export type ThunkDispatch = OldThunkDispatch<RootState, null , RootAction>


export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
))



// <RootState,RootAction,{},{}>