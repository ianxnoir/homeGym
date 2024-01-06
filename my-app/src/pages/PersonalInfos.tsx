// import { Calendar } from '../component/Calendar';


import React, { useEffect, useState } from "react"

import { Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faKey } from "@fortawesome/free-solid-svg-icons";

import { RootState } from '../store';
import { useSelector } from 'react-redux';



export function PersonalInfo(
    props:{
        update:()=>void
    }
) {

    const username = useSelector((state: RootState) => state.userReducer.displayname)

    const id = useSelector((state: RootState) => state.userReducer.id) as number
    const token = useSelector((state: RootState) => state.auth.token)

    const gender = useSelector((state: RootState) => state.userReducer.gender)
    const email = useSelector((state: RootState) => state.userReducer.email)
    const height = useSelector((state: RootState) => state.userReducer.height)
    const weight = useSelector((state: RootState) => state.userReducer.weight)
    const goal_id = useSelector((state: RootState) => state.userReducer.goal_id)
    const focus_id = useSelector((state: RootState) => state.userReducer.focus_id)
    const frequency_id = useSelector((state: RootState) => state.userReducer.frequency_id)
    const [message, setMessage] = useState("")
    const [InfoMessage, setInfoMessage] = useState("")
    const [msgHeight, setHeightMsg] = useState("")
    const [msgWeight, setWeightMsg] = useState("")
    const [msgName, setNameMsg] = useState("")
    const [pw, setpw] = useState({
        oldPassword: "",
        newPassword: "",
        cPassword: ""
    })
    const [info, setInfo] = useState({
        username: username,
        height: height?.toString(),
        weight: weight?.toString(),
        goal_id: goal_id,
        frequency_id: frequency_id,
        focus_id: focus_id
    })


    async function resetPW(id: number) {

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/changePassword?userId=${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    ...pw,
                    oldPassword: pw.oldPassword,
                    newPassword: pw.newPassword

                })
            })

        let result = await res.json();
        setMessage(result.msg)
        return setInterval(() => setMessage(""), 2000)
    }




    const selectGoal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setInfo({ ...info, goal_id: parseInt(event.currentTarget.value) });
    }

    const selectFrequency = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setInfo({ ...info, frequency_id: parseInt(event.currentTarget.value) });
    }

    const selectFocus = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setInfo({ ...info, focus_id: parseInt(event.currentTarget.value) });
    }




    async function userInfoUpdate(id: number) {
        if (info.height === "".trim()) {
            return setHeightMsg('Please input Height.')
        } else if (info.weight === "".trim()) {
            return setWeightMsg('Please input Weight')
        } else if (info && info.username && info.username.length < 2) {
            return setNameMsg("Username has to contain at least 2 character")
        }
        else if (info.username === "".trim()) {
            return setNameMsg('Please input your name.')

        }
        else if (info && info.height && info.username && info.weight &&
            (info.height.indexOf(" ") > -1 || info.weight.indexOf(" ") > -1)) {
            return setNameMsg('Number input cannot have space.')
        }

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/userInfoUpdate?userId=${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    ...info,
                    height: parseInt(info.height!),
                    weight: parseInt(info.weight!),

                    frequency: info.frequency_id!,
                    focus: info.focus_id!,
                    goal: info.goal_id!,
                })
            }
        )


        let result = await res.json();
        console.log(result, "Hi result")

        if (result.msg !== "Successful".trim()) {
            return setInfoMessage("Try again")

        }
        props.update()
        return setInfoMessage("Successful".trim())
    }

    useEffect(() => {
        setInfo({
            username: username,
            height: height?.toString(),
            weight: weight?.toString(),
            frequency_id: frequency_id,
            focus_id: focus_id,
            goal_id: goal_id,
        })
    }, [username, height, weight, frequency_id, focus_id, goal_id,])



    return (


        <Container>

            <Row>
                <Col>
                    <div className="form-header1">
                        <h3>Account Settings</h3>

                    </div>




                </Col>

            </Row>
            <div className="bigBorder">
                <Row>

                    <Col xs={6}>

                        <div className="editBtn2">

                            <FontAwesomeIcon className="pen" icon={faPen}></FontAwesomeIcon>
                                    Update your Fitness Profiles
                </div>

                        <form className="infoUpdate" id="resetinfo-form" key={1} >

                            <Row>
                                <Col xs={2}>
                                    <div className="form-group row">
                                        <label htmlFor="gender">Gender</label>
                                    </div>
                                </Col>
                                <Col xs={10}>



                                    <div className="formDetail">{gender}</div>




                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2}>
                                    <div className="form-group row">
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </Col>
                                <Col xs={10}>
                                    <div className="formDetail">
                                        {email}
                                    </div>



                                </Col>

                            </Row>




                            <Row>

                                <Col xs={6}>
                                    <div className="form-group">

                                        <label htmlFor="password">Height(cm)</label>
                                        <input type="number" className="inputForm" id="height" value={info.height} name="height" onChange={(event) => setInfo({ ...info, height: event.currentTarget.value })} />
                                        <div className="errorMsg">{msgHeight}</div>
                                    </div>

                                </Col>
                                <Col xs={6}>
                                    <div className="form-group">

                                        <label htmlFor="password">Weight(kg)</label>
                                        <input type="number" id="weight" className="inputForm" name="weight" value={info.weight} onChange={(event) => setInfo({ ...info, weight: event.currentTarget.value })} />
                                        <div className="errorMsg">{msgWeight}</div>
                                    </div>
                                </Col>

                            </Row>

                            <Row><Col>
                                <div className="form-group">

                                    <label htmlFor="nickName">Your Nickname</label>
                                    <input id="nickname" className="inputForm" name="displayname" value={info.username!} onChange={(event) => setInfo({ ...info, username: event.currentTarget.value })} />
                                    <div className="errorMsg">{msgName}</div>
                                </div>
                            </Col>

                            </Row>

                            <Row><Col>
                                <div className="form-group">

                                    <label htmlFor="goal_id">What is your goal? (select one)</label>
                                    <button id="goal1" type="button" className={info.goal_id === 1 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"} value="1" defaultValue={info.goal_id ? `${info.goal_id}` : ''} onClick={selectGoal}>Lose weight</button>
                                    <button id="goal2" type="button" className={info.goal_id === 2 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"}value="2" defaultValue={info.goal_id ? `${info.goal_id}` : ''}  onClick={selectGoal}>Stay healthy</button>
                                    <button id="goal3" type="button" className={info.goal_id === 3 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"}value="3" defaultValue={info.goal_id ? `${info.goal_id}` : ''}  onClick={selectGoal}>Build muscles</button>
                                </div>
                            </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="form-group">

                                        <label htmlFor="exercise">How often do you exercise? (select one)</label>

                                        <button id="exercise1" type="button" className={info.frequency_id === 1 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"} value="1" defaultValue={info.frequency_id ? `${info.frequency_id}` : ''} onClick={selectFrequency}>Just start exercising</button>
                                        <button id="exercise2" type="button" className={info.frequency_id === 2 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"} value="2" defaultValue={info.frequency_id ? `${info.frequency_id}` : ''}  onClick={selectFrequency}>2-3 times a week</button>
                                        <button id="exercise3" type="button" className={info.frequency_id === 3 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"} value="3" defaultValue={info.frequency_id ? `${info.frequency_id}` : ''}  onClick={selectFrequency}>Over 3 times a week</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row><Col>
                                <div className="form-group">

                                    <label htmlFor="focus">What's your focus? (select one)</label>


                                    <button type="button" className={info.focus_id === 1 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"} value="1" defaultValue={info.focus_id ? `${info.focus_id}` : ''}  onClick={selectFocus}>Stretching</button>
                                    <button type="button" className={info.focus_id === 2 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"} value="2" defaultValue={info.focus_id ? `${info.focus_id}` : ''}  onClick={selectFocus}>Weight gain training</button>
                                    <button type="button" className={info.focus_id === 3 ? "btn btn-info btnSpace optBtnSelect2":  "btn btn-info btnSpace optBtn2"} value="3" defaultValue={info.focus_id ? `${info.focus_id}` : ''} onClick={selectFocus}>Keep fit</button>
                                </div>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>{InfoMessage}</div>
                                </Col>
                            </Row>
                            <div className="form-group">

                                <button className="saveBtn" onClick={async (event) => {
                                    event.preventDefault()
                                    userInfoUpdate(id)
                                    // if(info.username.length<5){
                                    //     alert('Username has to contain at least 5 character.')

                                    // }else 




                                }

                                }>Save</button>
                            </div>
                        </form>

                    </Col>
                    <Col xs={6}>

                        <div className="middleBorder">
                            <Row>
                                <Col>
                                    <div className="form-header">


                                        <h1> <FontAwesomeIcon className="pen" icon={faKey}></FontAwesomeIcon>
                                Reset your Password</h1>

                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                    <div className="form">

                                        <form className="signup" id="resetpw-form" key={2} >
                                            <div className="form-group">

                                                <label htmlFor="password">Current Password</label>
                                                <input type="password" id="oldPassword" name="oldPassword" onChange={(event) => setpw({ ...pw, oldPassword: event.currentTarget.value })} />
                                            </div>
                                            <div className="form-group">

                                                <label htmlFor="password">New Password</label>
                                                <input type="password" id="newPassword" name="newPassword" onChange={(event) => setpw({ ...pw, newPassword: event.currentTarget.value })} />
                                            </div>
                                            <div className="form-group">

                                                <label htmlFor="cpassword">Confirm New Password</label>
                                                <input type="password" id="rePassword" name="cPassword" onChange={(event) => setpw({ ...pw, cPassword: event.currentTarget.value })} />
                                            </div>

                                            <div className="errorMsg">{message}</div>

                                            <div className="form-group">

                                                <button className="submitCpw" onClick={async (event) => {
                                                    event.preventDefault()

                                                    if (pw.cPassword !== pw.newPassword) {
                                                        setMessage("New password does not match with Password Confirm.")
                                                    }
                                                    else if (pw.cPassword === "" || pw.newPassword === "" || pw.oldPassword === "") {
                                                        setMessage("Please fill in all column before submit.")
                                                    } else {
                                                        resetPW(id)
                                                    }



                                                }

                                                }>Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </div>
        </Container>


    )
}