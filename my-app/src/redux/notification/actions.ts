import { Dispatch } from "react";
import dotenv from 'dotenv';
import { NoticeState } from './state'
import { RootState } from "../../store";
dotenv.config()


export function getNotification(list: {
    id: number,
    content: string,
    created_at: string
}[]) {

    return {
        type: '@@notice/getNotification' as '@@notice/getNotification',
        list
    }
}


export function fetchNotification() {
    return async (dispatch: Dispatch<any>, getState: () => RootState) => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/fetchNotification`,
            {
                headers: {
                    'Authorization': 'Bearer ' + getState().auth.token
                }
            }
        )
        const result = await res.json();
        if (!(result.result.length > 0)) {
            return
        }

        return dispatch(getNotification(result.result))
    }
}

export type NoticeAction = ReturnType<typeof getNotification>