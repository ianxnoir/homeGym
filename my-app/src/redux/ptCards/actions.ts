import { Dispatch } from "react";
import dotenv from 'dotenv';
import { RootState } from "../../store";
dotenv.config()


export function getCards(
    result: {
        id: number,
        displayname: string,
        height: number,
        gender: string,
        qualification: string[],
        speciality: string[],
        intro: string,
        categories: string[],
        photo: [],
        video: string,
        avgScore: number,
        ratingNo: number,

    }[],
    count: number
) {
    return {
        type: '@@ptCards/getCards' as '@@ptCards/getCards',
        result,
        count
    }
}

export function getSearchCard(
    result: ({
        id: number,
        displayname: string,
        height: number,
        gender: string,
        qualification: string[],
        speciality: string[],
        intro: string,
        categories: string[]|null,
        photo: [],
        video: string,
        avgScore: number,
        ratingNo: number,

    }[]) | null


) {
    return {
        type: '@@ptCards/getSearchCard' as '@@ptCards/getSearchCard',
        result
    }
}



export const fetchCards = (category: string, page: number) => {
    return async (dispatch: Dispatch<any>, getState: () => RootState) => {
        console.log(category, 'cat')
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getCards`,
            {
                method: "POST",
                headers: {

                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                    page: page,
                    category_id: parseInt(category)
                })

            })

        const result = await res.json();

        //could be empty array as no record, return null
        // if (Array.isArray(result.result) && result.result.length > 0) {
        return dispatch(getCards(result.result, result.count))
        // }
    }
}

export const fetchSearch = (searchTerm: string) => {
    return async (dispatch: Dispatch<any>, getState: () => RootState) => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/search`,
            {
                method: "POST",
                headers: {

                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({ searchTerm })

            })

        const result = await res.json();
        if (result.result.length > 0) {
            return dispatch(getSearchCard(result.result))
        }

        else {
            return dispatch(getSearchCard(null))
        }

    }
}

    export type CardAction = ReturnType<typeof getCards>