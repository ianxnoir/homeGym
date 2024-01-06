import { Dispatch } from "react";
import dotenv from 'dotenv';
import { RootState } from "../../store";
import { toast } from "react-toastify";
import { Rows } from '../../type'
dotenv.config()

export function getCourseList(result: Rows[]) {
    return {
        type: '@@courselist/getCourseList' as '@@courselist/getCourseList',
        result
    }
}


//PT COURSE PAGE




export const fetchPTCourse = (cancelledCourse: () => void) => {


    return async (dispatch: Dispatch<any>, getState: () => RootState) => {


        //btn function
        const goLive = async (zoomLink: string) => {
            window.open(zoomLink, "_blank");
        }

        const cancelcourse = async (timeslot_id: number) => {


            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/PTCancelCourse`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + getState().auth.token

                    },
                    body: JSON.stringify({ timeslot_id })
                }
            )

            let responded = await response.json();
            if (responded.msg !== "Successful".trim()) {

                toast.error(" ❗️ Fail to cancel", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return
            }

            toast.error(`😮 ${responded.msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            cancelledCourse()
        }

        //end of btn function


        console.log("called")
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getPTCourse`,
            {
                headers: {

                    'Authorization': 'Bearer ' + getState().auth.token

                }
            })
        const result = await res.json();

        if (Array.isArray(result)) {
            for (const res of result) {

                res.clickBtn = () => goLive(res.zoomlink)
                res.clickBtn2 = () => cancelcourse(res.id)


                res.btnWord = "Go Live"
                res.btnWord2 = "Cancel"
            }
        }

        return dispatch(getCourseList(result))
    }
}







//Profile page (pt&public)
export const fetchProfileCourse = (id: number, isAuthenticated: boolean | null, refreshAfterApplied: () => void) => {
    return async (dispatch: Dispatch<any>, getState: () => RootState) => {


        const checkRegistered = async (result: { id: number }[]) => {

            let timeslot_id = []
            for (const res of result) {
                timeslot_id.push(res.id)
            }

            let registered_timeslot = await fetch(`${process.env.REACT_APP_BACKEND_URL}/checkRegisteredTimeslot`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + getState().auth.token
                    },
                    body: JSON.stringify({
                        timeslot_id: timeslot_id
                    })
                }
            )

            let registered_timeslots = await registered_timeslot.json();
            if (registered_timeslots.result.length) {
                return registered_timeslots.result
            }

        }





        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getPTCoursebyPublic`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pt_id: id
                })
            }
        )

        let result = await res.json();

        if (result.length > 0) {
            //check the applied status of row button
            if (isAuthenticated) {
                let registered_timeslots = await checkRegistered(result)

                if (registered_timeslots) {
                    for (const res of result) {
                        for (const slot of registered_timeslots) {
                            if (slot.timeslot_id === res.id) {
                                res.btnWord = "Applied"
                            }
                        }
                    }
                }

            }

            for (const res of result) {
                res.clickBtn2 = null
                res.btnWord2 = null
                //click first button to apply course
                res.clickBtn = async () => {
                    if (isAuthenticated) {
                        let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/applyCourse`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    'Authorization': 'Bearer ' + getState().auth.token
                                },
                                body: JSON.stringify({
                                    timeslot_id: res.id,
                                })
                            }
                        )
                        let responsed = await response.json();

                        toast.info(`😉 ${responsed.result}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        refreshAfterApplied()
                    }
                }
            }
        }

        return dispatch(getCourseList(result))
    }

}


//User selected course page
export function fetchUserCourse(cancelCourse: () => void) {

    return async (dispatch: Dispatch<any>, getState: () => RootState) => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/fetchUserCourse`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + getState().auth.token
                }
            })

        let result = await res.json();


        for (const res of result) {

            res.clickBtn2 = async () => {
                let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/cancelCourse`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + getState().auth.token
                        },
                        body: JSON.stringify({ timeslot_id: res.id })
                    }
                )

                let responded = await response.json();
                if (responded.result === "Successful".trim()) {
                    toast.warn('❌ Cancelled!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return cancelCourse()
                }

            }

            res.clickBtn = async () => {
                window.open(res.zoomlink, "_blank");
            }
            res.btnWord = "Join Live"
            res.btnWord2 = "Cancel"
        }

        return dispatch(getCourseList(result))
    }
}




export type courseListAction = ReturnType<typeof getCourseList>