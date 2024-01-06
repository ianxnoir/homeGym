import React, { useState, useEffect } from 'react'
import { LiveCourseList } from '../component/LiveCourseList'
// import { Rows } from '../type'
import { RootState } from '../store';
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify";
import { fetchUserCourse } from "../redux/courseList/actions"
toast.configure();
export function SelectedCourse() {

    const dispatch = useDispatch();
    // const [courseRow, setCourseRow] = useState<Rows[] | null>(null)
    const token = useSelector((state: RootState) => state.auth.token)
    const [quota, setQuota] = useState(0)
    const [cancel, setCancel] = useState(0)
    const cancelledCourse = () => setCancel(cancel + 1)



    useEffect(() => {

        dispatch(fetchUserCourse(cancelledCourse))



        async function fetchUserQuota() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/fetchQuota`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + token
                    }
                })
            let result = await res.json();

            if (result.result.length) {
                setQuota(result.result[0].quota)
            }
        }

        fetchUserQuota()
    

            //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [cancel, token])




    return (
        <div>
            <div  className="p-3 d-flex justify-content-flex align-items-start"><div className="quotaNo">Quota:{quota}</div></div>
            <LiveCourseList tablename={"Applied Course"} showTootip={false} />
        </div>




    )
}