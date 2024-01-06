import React, { useState } from 'react'
import { PTForm } from '../type'
import { useDispatch } from "react-redux"
import { push } from "connected-react-router";
import { validateEmail } from '../checkemail'
import '../scss.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { LoadingSpinner } from "../component/LoadingSpinner"

import { toast } from "react-toastify";
import { useEffect } from 'react';
toast.configure();




export function PTRegister() {
    const [loading, setLoadingReg] = useState(false);

    const dispatch = useDispatch();

    async function dataURLToFile(dataURL: string) {
        const res = await fetch(dataURL);
        const blob = await res.blob();
        const file = new File([blob], `ptpic`);
        return file

    }

    async function ptRegisters(form: PTForm) {


        if (form.username.length < 2) {
            return setMessage("Username has to contain at least 2 character")
        }

        if (!validateEmail(form.email)) {
            return setMessage("Invalid Email.")
        }
        if (form.email.indexOf(" ") > -1 || form.password.indexOf(" ") > -1) {
            return setMessage("Input cannot have space.")
        }

        if (form.password.length < 5) {
            return setMessage("Password has to contain at least 5 character.")

        }

        if (!form.video) {
            return setMessage("Must upload video.")
        }

        if (isNaN(parseInt(form.height))) {
            return setMessage("Height must be a number.")
        }

        for (const item in form) {
            if (form[item] === "" || !form[item]) {
                return setMessage("Please fill in all column.")
            }
        }


        const formData = new FormData();

        formData.append("username", form.username)
        formData.append("email", form.email.trim())
        formData.append("password", form.password.trim())
        formData.append("height", form.height.trim())
        formData.append("gender", form.gender.trim())
        formData.append("quali", JSON.stringify(form.quali))
        formData.append("spec", JSON.stringify(form.spec))
        formData.append("intro", form.intro)

        formData.append("pic", form.video)

        for (const image of form.image) {
            if (image !== "".trim()) {
                let pic = await dataURLToFile(image)
                formData.append("pic", pic)
            } else {
                return setMessage("must upload all 3 photos")
            }
        }

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ptRegister`,
            {
                method: "POST",
                body: formData
            })



        let result = await res.json();
        console.log(result)

        if (result.msg === "email has been used") {
            setLoadingReg(false)
            return toast.error(" ❗️ Email has been used", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
           
        } else if (result.msg === "Successful") {
            toast.success('Successfully Registered', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoadingReg(false)
            return dispatch(push('/'))
        } else {
            setLoadingReg(false)
            return toast.success('Try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
           
        }

    }

    const [currentPage, setCurrentPage] = useState(1)
    const [answer, setAnswer] = useState({
        username: "",
        email: "",
        password: "",
        height: "",
        gender: "",
        quali: [""],
        spec: [""],
        image: ["", "", ""],
        intro: "",
        video: null as any,
    })



    const [message, setMessage] = useState("")
    const [nameMsg, setNameMsg] = useState("")
    const [emailMsg, setEmailMsg] = useState("")
    const [passwordMsg, setPasswordMsg] = useState("")
    const [heightMsg, setHeightMsg] = useState("")


    const inputClass2 = "regInput mb-1 text-light "
    const inputClass3 = "w-50 p-2 mt-3 mb-3 text-white text-light regInput3 "
    const inputClass4 = " w-75 p-2 mt-3 mb-3 regInput4 "
    const formClass = "d-flex flex-column justify-content-between align-items-center h-100 p-3 h-100 "
    const buttonClass = "w-75 d-flex justify-content-between mt-5 mb-3"
    const buttonClass2 = "w-75 d-flex justify-content-between mt-4 mb-3"
    const align = "d-flex justify-content-center align-items-center "


    const selectGender = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnswer({ ...answer, gender: event.currentTarget.value });
    }

    useEffect(() => {

    }, [loading])

    return (
        <div id="PtRegister" className="d-flex justify-content-center align-items-center">

            <form id="PtRegForm" className="w-75 position-relative h-75" >

                {currentPage === 1 &&
                    <div id="form1" className={formClass}>
                        <div className="welcome welcomeMargin"> Let's get to know more about you!</div>
                        <ol className="wizard numeric">
                            <li className="done" >
                                <span>
                                    1
                            </span>
                            </li>
                            <li  >
                                <span>
                                    2
                            </span>
                            </li>
                            <li  >
                                <span>
                                    3
                            </span>
                            </li>
                            <li>
                                <span>
                                    4
                            </span>
                            </li>
                            <li >
                                <span>
                                    5
                            </span>
                            </li>
                        </ol>

                        <input className={inputClass2} placeholder="Username" value={answer.username} onChange={(event) => setAnswer({ ...answer, username: event.currentTarget.value })}></input>
                        <div className="errorMsg">{nameMsg}</div>
                        <input className={inputClass2} placeholder="Email" value={answer.email} onChange={(event) => setAnswer({ ...answer, email: (event.currentTarget.value).trim() })}></input>
                        <div className="errorMsg">{emailMsg}</div>
                        <input className={inputClass2} type="password" placeholder="Password" value={answer.password} onChange={(event) => setAnswer({ ...answer, password: (event.currentTarget.value).trim() })}></input>
                        <div className="errorMsg">{passwordMsg}</div>
                        <input className={inputClass2} placeholder="Height(cm)" value={answer.height} onChange={(event) => setAnswer({ ...answer, height: (event.currentTarget.value).trim() })}></input>
                        <div className="errorMsg">{heightMsg}</div>
                        <div className={buttonClass}>
                            <div></div>
                            <button type="button" className="btn btn-secondary nextBtn" onClick={async () => {

                                setEmailMsg("")
                                setPasswordMsg("")
                                setNameMsg("")
                                setHeightMsg("")
                                if (answer.email === "".trim()) {
                                    return setEmailMsg('Please input your email.')

                                } else if (answer && answer.password && answer.password.length < 5) {
                                    return setPasswordMsg('Please input your password.')
                                }
                                else if (answer && answer.username && answer.username.length < 2) {
                                    return setNameMsg("Username has to contain at least 2 character")
                                }
                                else if (answer.username === "".trim()) {
                                    return setNameMsg('Please input your name.')

                                } else if (answer.height === "".trim()) {
                                    return setHeightMsg('Please input your height.')

                                }
                                else {
                                    setCurrentPage(2)
                                }

                            }
                            }> next </button>
                        </div>
                    </div>}
                {currentPage === 2 &&
                    <div id="form1.5" className={formClass}>

                        <ol className="wizard numeric">
                            <li className="active">
                                <span>
                                    1
                            </span>
                            </li>
                            <li className="done" >
                                <span >
                                    2
                            </span>
                            </li>
                            <li  >
                                <span>
                                    3
                            </span>
                            </li>
                            <li >
                                <span>
                                    4
                            </span>
                            </li>
                            <li >
                                <span>
                                    5
                            </span>
                            </li>
                        </ol>
                        <div className="welcome">What is your gender?</div>
                        <div className="genderBtnpt">
                            <button type="button" className={answer.gender === "Male" ? "btn btn-info mr-3 malept maleSelect" : "btn btn-info mr-3 male malept"} value="Male" onClick={selectGender}>Male</button>
                            <button type="button" className={answer.gender === "Female" ? "btn btn-info mr-3 femalept femaleSelect" : "btn btn-info mr-3 female femalept"} value="Female" onClick={selectGender}>  Female</button>
                        </div>

                        <div className="welcome down2">Please upload 3 photos for your profile.</div>

                        <div className="photo100 d-flex justify-content-between align-items-center my-5">
                            <label id="change-photo-button" htmlFor="upload" className={align + " m-3 circleBtn rounded-circle"}>
                                <FontAwesomeIcon className="faPlus" icon={faPlus}></FontAwesomeIcon>

                            </label>

                            <input type="file" id="upload" accept="image/*" hidden onChange={(event) => {
                                event.preventDefault()
                                let reader = new FileReader();
                                if (event.target.files?.[0]) {
                                    reader.readAsDataURL(event.target.files[0]);
                                    reader.onload = (e) => {
                                        let dataURL = reader.result as string;
                                        // const images = new Image();
                                        // images.src = dataURL as any;
                                        for (let i = 0; i < answer.image.length; i++) {
                                            if (answer.image[i] === "") {
                                                console.log(i)
                                                answer.image.splice(i, 1, dataURL)
                                                let newImage = answer.image
                                                setAnswer({
                                                    ...answer,
                                                    image: newImage
                                                })
                                                return
                                            }

                                        }
                                    }
                                }
                                console.log(answer)
                            }}></input>



                            {answer.image.map((image, i) => {


                                return (
                                    <div className="imageBorder position-relative" key={i} style={{ backgroundImage: `url('${image}')`, backgroundPosition: "center", backgroundSize: "cover" }}>


                                        {image !== "" ? <div className={align + " m-3 circleBtn rounded-circle position-absolute"} key={i} style={{ width: "30px", height: "30px", right: "-30px", top: "-30px" }} onClick={() => {
                                            answer.image.splice(i, 1, "")
                                            let newImage = answer.image
                                            setAnswer(
                                                {
                                                    ...answer,
                                                    image: newImage
                                                }
                                            )

                                            console.log(answer.image)
                                        }}>
                                            <FontAwesomeIcon className="faTimes" icon={faTimes}></FontAwesomeIcon>

                                        </div>
                                            : null}



                                    </div>

                                )
                            })}


                        </div>

                        <div className={buttonClass}>
                            <div></div>
                            <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(1)}> previous </button>
                            <button type="button" className="btn btn-secondary nextBtn" onClick={() => setCurrentPage(3)}> next </button>
                        </div>
                    </div>

                }
                {currentPage === 3 &&


                    <div className={align + "flex-column h-100"}>

                        <ol className="wizard numeric">
                            <li className="active">
                                <span>
                                    1
                            </span>
                            </li>
                            <li className="active" >
                                <span >
                                    2
                            </span>
                            </li>
                            <li className="done" >
                                <span>
                                    3
                            </span>
                            </li>
                            <li  >
                                <span>
                                    4
                            </span>
                            </li>
                            <li >
                                <span>
                                    5
                            </span>
                            </li>
                        </ol>
                        <div id="form2" className={formClass + "w-100"}>

                            <div id="quali" className="w-100">

                                <div className={align + "w-100"}>

                                    <div className="welcome">Qualification</div>
                                    <div className={align + " m-3 circleBtn rounded-circle"}  onClick={() => setAnswer(
                                        {
                                            ...answer,
                                            quali: answer.quali.concat([""])
                                        }
                                    )}>

                                        <FontAwesomeIcon className="faPlus"icon={faPlus}></FontAwesomeIcon>
                                    </div>
                                </div>


                                <div className={align + "flex-column"}>
                                    {answer.quali.map((q, i) => <div className={align + "w-100"}>
                                        <input className={inputClass3} value={answer.quali[i]} placeholder="Qualification" key={i}
                                            onChange={(event) => {
                                                answer.quali[i] = event.currentTarget.value
                                                let newQ = answer.quali
                                                setAnswer(
                                                    {
                                                        ...answer,
                                                        quali: newQ
                                                    }
                                                )
                                            }
                                            }

                                        ></input>
                                        <button className=" m-3 circleBtn rounded-circle"  onClick={(e) => {
                                            e.preventDefault();
                                            answer.quali.splice(i, 1)
                                            let newQuali = answer.quali
                                            setAnswer(
                                                {
                                                    ...answer,
                                                    quali: newQuali
                                                }
                                            )
                                            console.log(answer)
                                        }
                                        }>
                                            <FontAwesomeIcon className="faMinus" icon={faMinus}></FontAwesomeIcon>


                                        </button></div>)}
                                </div>

                            </div>

                        </div>


                        <div id="form3" className={formClass + "w-100"}>

                            <div id="spec" className="w-100">
                                <div className={align + "w-100"}>
                                    <div className="welcome">Speciality</div>
                                    <div className={align + " m-3 circleBtn rounded-circle"} style={{ width: "30px", height: "30px" }} onClick={() => setAnswer(
                                        {
                                            ...answer,
                                            spec: answer.spec.concat([""])
                                        }
                                    )}>
                                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                    </div>
                                </div>


                                <div className={align + "w-100 flex-column"}>
                                    {answer.spec.map((q, i) => <div className={align + "w-100"}><input className={inputClass3 + "w-50"} value={answer.spec[i]} placeholder="Speciality" key={i}
                                        onChange={(event) => {
                                            answer.spec[i] = event.currentTarget.value
                                            let newS = answer.spec
                                            setAnswer(
                                                {
                                                    ...answer,
                                                    spec: newS
                                                }
                                            )
                                        }
                                        }

                                    ></input>
                                        <button className=" m-3 circleBtn rounded-circle" style={{ width: "30px", height: "30px" }} onClick={(e) => {
                                            e.preventDefault();
                                            answer.spec.splice(i, 1)
                                            let newSpec = answer.spec
                                            setAnswer(
                                                {
                                                    ...answer,
                                                    spec: newSpec
                                                }
                                            )
                                        }
                                        }>   <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                        </button></div>)}
                                </div>

                            </div>
                        </div>





                        <div className={buttonClass}>
                            <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(2)}> previous </button>
                            <button type="button" className="btn btn-secondary nextBtn" onClick={() => setCurrentPage(4)}> next </button>
                        </div>



                    </div>
                }




                {currentPage === 4 &&
                    <div id="form3" className={formClass}>
                        <ol className="wizard numeric">
                            <li className="active">
                                <span>
                                    1
                            </span>
                            </li>
                            <li className="active" >
                                <span >
                                    2
                            </span>
                            </li>
                            <li className="active">
                                <span>
                                    3
                            </span>
                            </li>
                            <li className="done" >
                                <span >
                                    4
                            </span>
                            </li>

                            <li className="done">
                                <span>
                                    5
                            </span>
                            </li>


                        </ol>


                        <div className="welcome down">Self Introduction</div>




                        <textarea className={inputClass4} placeholder="Introduce yourself" value={answer.intro} style={{ minHeight: "30%" }}
                            onChange={(event) => setAnswer({ ...answer, intro: event.currentTarget.value })}></textarea>
                        {/* <input className={inputClass} placeholder="Introduce yourself" value={answer.intro} style={{minHeight:"50%"}}
                    onChange={(event) => setAnswer({ ...answer, intro: event.currentTarget.value })}></input> */}

                        <div className="welcome">Upload Video</div>
                        <input type="file" accept="video/*" onChange={(event) => {
                            if (event.target.files) {

                                setAnswer({
                                    ...answer,
                                    video: event.target.files[0]
                                })
                            }
                        }}></input>


                        <div className={buttonClass2}>
                            <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(3)}> Previous </button>
                            <button type="button" className="btn btn-secondary nextBtn" onClick={() => setCurrentPage(5)}>Next </button>
                        </div>



                    </div>


                }

                {currentPage === 5 &&

                    <div id="form3" className={formClass}>
                        <ol className="wizard numeric">
                            <li className="active">
                                <span>
                                    1
                                    </span>
                            </li>
                            <li className="active" >
                                <span >
                                    2
                                    </span>
                            </li>
                            <li className="active">
                                <span>
                                    3
                                    </span>
                            </li>
                            <li className="active" >
                                <span >
                                    4
                                    </span>
                            </li>

                            <li className="done">
                                <span>
                                    5
                                    </span>
                            </li>



                        </ol>


                        <div className="welcome down">Please submit after input all the information.</div>


                        <div className="errorMsg">{message}</div>

                        {loading ? <LoadingSpinner /> : <div></div>}


                        <div className={buttonClass}>
                            <button type="button" className="btn btn-secondary backBtn" onClick={async ( ) => {
                                setLoadingReg(false)
                                setCurrentPage(4)
                                
                            }}> previous </button>

                            <button type="button" className="btn btn-secondary nextBtn" onClick={async (event) => {
                                event.preventDefault()
                                setLoadingReg(true)
                                ptRegisters(answer)
                            }

                            }> Submit </button>


                        </div>

                    </div>
                }





            </form>

        </div>
    )
}

