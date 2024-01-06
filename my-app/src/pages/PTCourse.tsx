import React, { useState, useEffect } from 'react';
import { LiveCourseList } from '../component/LiveCourseList'
import { RootState } from '../store';
import { CourseForm } from '../type'
import { Timeslot } from '../type'
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { fetchPTCourse } from '../redux/courseList/actions';
// import { Rows } from "../type"
import { toast } from "react-toastify";
toast.configure();

export function PTCourse() {
    const dispatch = useDispatch();

    const inputClass = "w-50 p-2 mb-3 comBox2 inputColor"

    // const inputClass2 = " p-2 mb-3 inputColor text-white text-light comBox4"


    const [form, setForm] = useState<CourseForm>(


        {
            courseName: "",
            courseDes: "",
            category1: "",
            category2: "",
            seat: "1",
            timeslot: [{
                date: "",
                starttime: "",
                endtime: "",
                zoomlink: ""
            }]
        }
    )
    const [catList, setCatList] = useState<{ id: string, category: string }[]>([])
    const [checkedBox, setCheckedBox] = useState([] as string[]);
    const [message, setMessage] = useState("")
    const [courseFormClass, setCourseFormClass] = useState("none")
    const [formUpdate, setFormUpdate] = useState(1)
    // const [courseRow, setCourseRow] = useState<Rows[] | null>(null)
    const [cancel, setCancel] = useState(0)


    const token = useSelector((state: RootState) => state.auth.token)

    const cancelledCourse = () => setCancel(cancel + 1)

    // const goLive = async (zoomLink: string) => {
    //     window.open(zoomLink, "_blank");
    // }

    // const cancelcourse = async (timeslot_id: number) => {
    //     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/PTCancelCourse`,
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 'Authorization': 'Bearer ' + token

    //             },
    //             body: JSON.stringify({ timeslot_id })
    //         }
    //     )

    //     let responded = await response.json();
    //     if (responded.msg !== "Successful".trim()) {

    //         toast.error(" ❗️ Fail to cancel", {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //         return
    //     }

    //     toast.error(`😮 ${responded.msg}`, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     });
    //     setCancel(cancel + 1)
    // }


    async function fetchform() {

        if (form.courseName.length < 1 || form.courseDes.length < 1) {
            return setMessage("Must input coursename")
        }
        if (checkedBox.length === 0) {
            return setMessage("select at least one category")
        }
        if (form.timeslot.length < 1) {
            return setMessage("please input at least one timeslot")
        }

        for (const slot of form.timeslot) {
            for (const input in slot) {
                const key = input as keyof Timeslot
                if (slot[key] === "".trim()) {
                    return setMessage("Please input all timeslot information")
                }
            }
        }
        console.log(form)
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/courseRegister`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token

                },
                body: JSON.stringify({
                    ...form,
                    seat: parseInt(form.seat),
                    category1: parseInt(checkedBox[0]),
                    category2: parseInt(checkedBox[1])
                })
            }
        )

        let result = await res.json();
        if (result.msg === "Successful") {
            setMessage("Successful")
            setTimeout(() => { setCourseFormClass("none") }, 1000)
            setForm({
                courseName: "",
                courseDes: "",
                category1: "",
                category2: "",
                seat: "1",
                timeslot: [{
                    date: "",
                    starttime: "",
                    endtime: "",
                    zoomlink: ""
                }]
            })
            setCheckedBox([])
            setFormUpdate(formUpdate + 1)
            return setMessage("")

        } else {
            return setMessage("Try again")
        }

    }

    //fetch form checkbox
    useEffect(() => {


        async function fetchCat() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getCatList`)
            let result = await res.json()

            setCatList(catList.concat(result))
        }
        fetchCat()
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])


    //fetch row for livecourselist
    useEffect(() => {
        dispatch(fetchPTCourse(cancelledCourse))
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [formUpdate, cancel, token])


    // console.log(form)
    // console.log(checkedBox)

    return (
        <div>

            <LiveCourseList tablename={"Registered Course List"}
                // rows={courseRow} 
                showTootip={true}
            />

            <div className="joinBtn2">
                <div className="realJoin3" onClick={() => setCourseFormClass("")}>
                    Add Course
                  </div>
            </div>

            <div>
                <div className={courseFormClass + " formshadow2"}>
                    <div className="d-flex justify-content-center align-items-center ">
                        <form className="d-flex flex-column justify-content-center align-items-center p-3 addCourseForm ">
                            <div className="align-self-end px-2" onClick={() => setCourseFormClass("none")}> <FontAwesomeIcon className="closeBtn" icon={faTimes}></FontAwesomeIcon></div>
                            <div className="mb-5 highlight ratingTitle"> Add Course </div>

                            <div className="d-flex justify-content-between w-75 py-2">
                                <div className="editTitle">Course Name</div>
                                <input className={inputClass} style={{ outline: "none" }} value={form.courseName!} onChange={(e) => {
                                    e.preventDefault();
                                    if (form) {
                                        setForm({
                                            ...form,
                                            courseName: e.currentTarget.value
                                        })
                                    }
                                }
                                }></input>
                            </div>

                            <div className="d-flex justify-content-between w-75 py-2">
                                <div className="editTitle">Course Description</div>
                                <textarea className={inputClass} style={{ outline: "none" }} value={form.courseDes!}
                                    onChange={(e) => {
                                        if (form) {
                                            setForm({
                                                ...form,
                                                courseDes: e.currentTarget.value
                                            })
                                        }
                                    }
                                    }

                                ></textarea>
                            </div>
                            <div className="d-flex justify-content-between w-75 pt-2 pb-4">
                                <div className="editTitle">Seat Limit</div>
                                <select className="select-css2" value={form.seat} onChange={(e) => {
                                    e.preventDefault();
                                    if (form) {
                                        setForm({
                                            ...form,
                                            seat: e.currentTarget.value
                                        })
                                    }

                                }} >

                                    {Array(5).fill("").map((p, i) =>
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    )}

                                </select>

                            </div>

                            <div className="editTitle">Categories</div>
                            <div className="d-flex w-75 flex-wrap m-3">

                                {/*value is i+1, that is the id in category table*/}
                                {catList.map((cat, i) =>
                                    <span className="m-3 checkPosi"  key={`${cat.category}${i}`}>
                                        <input type="checkbox"
                                            value={cat.id}
                                            className="mr-2 check"
                                            style={{ border: "solid 1px black",  appearance: "checkbox" }}
                                            checked={checkedBox.includes(cat.id)}
                                            disabled={checkedBox.length === 2 && !checkedBox.includes(cat.id)}

                                            // onClick = {(e)=>{
                                            //     if(categories.length<2){
                                            //         setCategories(categories.concat([e.currentTarget.value]))

                                            //     }else{
                                            //         e.currentTarget.checked = false
                                            //     }

                                            // }}

                                            onChange={(e) => {

                                                // cancel
                                                // press a checked checkbox
                                                if (checkedBox.includes(cat.id)) {
                                                    //cancel
                                                    const newCheckedBox = checkedBox.filter(chosen => chosen !== cat.id);
                                                    setCheckedBox(newCheckedBox);
                                                } else {
                                                    if (checkedBox.length === 2) {
                                                        return
                                                    } else {

                                                        setCheckedBox(checkedBox.concat([cat.id]))
                                                    }
                                                }


                                            }

                                            }
                                        />
                                        <label className="catName" htmlFor={cat.id}> {cat.category}</label>
                                    </span>
                                )}

                            </div>

                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <div className="editTitle">Timeslot</div>
                                <FontAwesomeIcon style={{ width: "30px", height: "30px", borderRadius: "15px", marginLeft:"10px"}} onClick={(e) => {
                                    e.preventDefault();
                                    setForm({
                                        ...form,
                                        timeslot: form.timeslot.concat({ date: "", starttime: "", endtime: "", zoomlink: "" })
                                    })
                                }} className="closeBtn2 circleBtn4 font1 p-2" icon={faPlus}></FontAwesomeIcon>
                               
                            </div>

                            {form.timeslot.map((slot, i) =>

                                <div key={i} className="d-flex justify-content-between align-items-center w-75 inputColor comBox2">
                                    <div className="w-75 p-3">
                                        <div className="my-3">
                                            <input type="date"
                                                value={slot.date || ""}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    form.timeslot[i].date = e.currentTarget.value
                                                    let newTimeslot = form.timeslot
                                                    setForm({
                                                        ...form,
                                                        timeslot: newTimeslot
                                                    })
                                                }

                                                }
                                            ></input></div>
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                            <div className="w-50">Start
                                            <input type="time" className="w-100 black1"

                                                value={slot.starttime!}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    form.timeslot[i].starttime = e.currentTarget.value
                                                    let newTimeslot = form.timeslot
                                                    setForm({
                                                        ...form,
                                                        timeslot: newTimeslot
                                                    })
                                                }

                                                }
                                            ></input>
                                            </div>

                                            <div className="w-50 ml-2 ">End
                                            <input type="time" className="w-100 black1"
                                                value={slot.endtime!}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    form.timeslot[i].endtime = e.currentTarget.value
                                                    let newTimeslot = form.timeslot
                                                    setForm({
                                                        ...form,
                                                        timeslot: newTimeslot
                                                    })
                                                }

                                                }
                                            ></input>
                                            </div>
                                        </div>


                                        <div className="my-3"><input className="black1" type="text"
                                            placeholder="Zoom Link" value={slot.zoomlink || ""}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                form.timeslot[i].zoomlink = (e.currentTarget.value).trim()
                                                let newTimeslot = form.timeslot
                                                setForm({
                                                    ...form,
                                                    timeslot: newTimeslot
                                                })
                                            }

                                            }
                                        ></input></div>







                                    </div>

                                    <div className="w-25 p-3 d-flex justify-content-center">
                                        
                                        <FontAwesomeIcon className="closeBtn2 p-2 circleBtn4" style={{ width: "30px", height: "30px", borderRadius: "15px" }} icon={faTimes} onClick={(e) => {
                                            e.preventDefault();
                                            form.timeslot.splice(i, 1)
                                            let newTimeslot = form.timeslot
                                            setForm({
                                                ...form,
                                                timeslot: newTimeslot
                                            })
                                        }}></FontAwesomeIcon>
                                    </div>
                                </div>


                            )}

                            <button type="submit" className="btn btn-secondary mt-4 submitCom" onClick={(e) => {
                                e.preventDefault();
                                fetchform()
                            }}>submit</button>
                            <div>{message}</div>
                        </form>
                    </div>
                </div>
            </div>


        </div>





    )
}
