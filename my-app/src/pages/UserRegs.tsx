import React, { useState } from 'react'
import '../scss.scss'
import { useDispatch} from "react-redux"
import { push } from "connected-react-router";
import {UserForm} from '../type'
import{validateEmail} from '../checkemail'
import { toast } from "react-toastify";

toast.configure();

export function UserRegister() {

const dispatch = useDispatch();

async function userRegisters(form:UserForm) {

 
   if(form.username.length<2){
      return setMessage ("Username has to contain at least 2 character")
   }

   if(!validateEmail(form.email)){
       console.log(validateEmail(form.email),"email")
      return setMessage ("Invalid Email")
   }

   //prevent space
   if (form.email.indexOf(" ") > -1 || form.password.indexOf(" ") > -1) {
      return setMessage ("Input cannot have space")
   }
   
   if (form.password.length<5) {
      return setMessage ("Password has to contain at least 5 character")

   }

   for(const item in form){
      if(form[item]===""||!form[item]){
         return setMessage("Please fill in all column")
      }
   }
   
  

   const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/userRegister`,
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            ...form,
            height: parseInt(form.height.trim()),
            weight: parseInt(form.weight.trim()),
            goal_id: parseInt(form.goal_id),
            frequency_id: parseInt(form.frequency_id),
            focus_id: parseInt(form.focus_id)
         })
      }
   )

   let result = await res.json();

  if(result.msg==="email has been used"){
      return setMessage("Email has been used")
   } else if(result.msg==="Successful"){
    toast.success('Successfully Registered', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return dispatch(push('/'))
   }else{
      return setMessage ("Try again")
   }
}
    const [currentPage, setCurrentPage] = useState(1)
    const [answer, setAnswer] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
        height: "",
        weight: "",
        dob: "",
        goal_id: "",
        frequency_id: "",
        focus_id: ""
    })

    const [message, setMessage] = useState("")
    const [nameMsg, setNameMsg] = useState("")
    const [emailMsg, setEmailMsg]= useState("")
    const [passwordMsg, setPasswordMsg] = useState("")
    // const[focusColor, setFocusColor] = useState({ backgroundColor: "" })
    const formClass = "d-flex flex-column justify-content-between align-items-center h-100 p-4 regForm"
    const inputClass = "regInput mb-3 text-light"
    const input2Class = "regInput mb-5 text-light"
    const buttonClass = "w-75 d-flex justify-content-between"

    const selectGoal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnswer({ ...answer, goal_id: event.currentTarget.value });
    }

    const selectFrequency = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnswer({ ...answer, frequency_id: event.currentTarget.value });
    }

    const selectFocus = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnswer({ ...answer, focus_id: event.currentTarget.value });
    }

    const selectGender = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnswer({ ...answer, gender: event.currentTarget.value });
    }
 

    return (
        <div id="UserRegister"  className="d-flex justify-content-center align-items-center">

            <form id="UserRegForm" className="w-75 h-50 position-relative">

                {currentPage === 1 &&
                    <div id="form1" className={formClass}>

                         <ol className="wizard numeric">
					  <li className="done">
                            <span>
                            1
                            </span>
                        </li>
                        <li  >
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

                        <div className="welcome welcomeMargin"> Let's get to know more about you!</div>
                        

                        <input className={inputClass} placeholder="Username" value={answer.username} onChange={(event) => setAnswer({ ...answer, username: event.currentTarget.value })}></input>
                        <div className="errorMsg">{nameMsg}</div>
                        <input className={inputClass} placeholder="Email" type="email" value={answer.email} onChange={(event) => setAnswer({ ...answer, email: (event.currentTarget.value).trim() })}></input>
                        <div className="errorMsg">{emailMsg}</div>
                        <input className={inputClass} placeholder="Password" type="password" value={answer.password} onChange={(event) => setAnswer({ ...answer, password: (event.currentTarget.value).trim() })}></input>
                        <div className="errorMsg">{passwordMsg}</div>
                        <div className={buttonClass}>
                            <div></div>
                            <button type="button" className="btn btn-secondary nextBtn" onClick={ async() => {
                                setEmailMsg("")
                                setPasswordMsg("")
                                setNameMsg("")
                                if(answer.email === "".trim()){
                                    return setEmailMsg('Please input your email.')
                                    
                            } else if(answer.password.length<5){
                                    return setPasswordMsg('Please input your password.')
                            }
                            
                            else if (answer && answer.username && answer.username.length < 2) {
                                return setNameMsg("Username has to contain at least 2 character")
                            }
                            else if (answer.username === "".trim()) {
                                return setNameMsg('Please input your name.')
                    
                            }else{
                                setCurrentPage(2)
                            }
                                
                            
                            }
                            }> next </button>
                        </div>

                    </div>}



                {currentPage === 2 &&
                    <div id="form2" className={formClass}>
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
                        <div className="genderBtn">
                            <button type="button" className={answer.gender === "Male" ? "btn btn-info mr-3 maleSelect":  "btn btn-info mr-3 male"} value="Male"  onClick={selectGender}>Male</button>
                            <button type="button" className={answer.gender === "Female" ? "btn btn-info mr-3 femaleSelect":  "btn btn-info mr-3 female"} value="Female"  onClick={selectGender}>Female</button>
                        </div>
                        
                        <input className={input2Class} placeholder="Height(cm)" value={answer.height} onChange={(event) => setAnswer({ ...answer, height: event.currentTarget.value })}></input>
                        <input className={input2Class} placeholder="Weight(kg)" value={answer.weight} onChange={(event) => setAnswer({ ...answer, weight: event.currentTarget.value })}></input>
                        <div className="welcome">Date of Birth</div>
                        <input className={input2Class} placeholder="Date of Birth" value={answer.dob} type="date" onChange={(event) => setAnswer({ ...answer, dob: event.currentTarget.value })}></input>

                        <div className={buttonClass}>
                            <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(1)}> previous</button>
                            <button type="button" className="btn btn-secondary nextBtn" onClick={() => setCurrentPage(3)}> next </button>
                        </div>
                    </div>

                }

                {currentPage === 3 && <div id="form-3" className={formClass}>
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
                        <li  className="done" >
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
                    <div className="welcome">What is your goal?    ( Select one )</div>

                    <button type="button" className={answer.goal_id === "1" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="1"  onClick={selectGoal}>Lose weight</button>
                    <button type="button" className={answer.goal_id === "2" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"}  value="2"  onClick={selectGoal}>Stay healthy</button>
                    <button type="button" className={answer.goal_id === "3" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="3"  onClick={selectGoal}>Build muscles</button>

                    <div className={buttonClass}>
                        <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(2)}> previous</button>
                        <button type="button" className="btn btn-secondary nextBtn" onClick={() => setCurrentPage(4)}> next </button>
                    </div>
                </div>}

                {currentPage === 4 && <div id="form-3" className={formClass}>
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
                        <li  className="active">
                            <span>
                            3
                            </span>
                        </li>
                        <li  className="done">
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
                    <div className="welcome">How often do you exercise?    ( Select one )</div>

                    <button type="button" className={answer.frequency_id === "1" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="1" onClick={selectFrequency} >Just start exercising</button>
                    <button type="button" className={answer.frequency_id  === "2" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="2" onClick={selectFrequency}>2-3 times a week</button>
                    <button type="button" className={answer.frequency_id  === "3" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="3"  onClick={selectFrequency}>Over 3 times a week</button>

                    <div className={buttonClass}>
                        <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(3)}> previous</button>
                        <button type="button" className="btn btn-secondary nextBtn" onClick={() => setCurrentPage(5)}> next </button>
                    </div>
                </div>}

                {currentPage === 5 && <div id="form-3" className={formClass}>
                <ol className="wizard numeric">
					  <li className="active">
                            <span>
                            1
                            </span>
                        </li>
                        <li className="active">
                            <span >
                            2
                            </span>
                        </li>
                        <li  className="active">
                            <span>
                            3
                            </span>
                        </li>
                        <li className="active">
                            <span>
                            4
                            </span>
                        </li>
                        <li className="done">
                            <span>
                            5
                            </span>
                        </li>
				            </ol>
                    <div className="welcome">What's your focus?   ( Select one )</div>

                    <button type="button" className={answer.focus_id  === "1" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="1" onClick={selectFocus}>Stretching</button>
                    <button type="button" className={answer.focus_id  === "2" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="2"  onClick={selectFocus}>Weight gain training</button>
                    <button type="button" className={answer.focus_id  === "3" ? "btn btn-info mr-3 optBtnSelect":  "btn btn-info optBtn"} value="3" onClick={selectFocus}>Keep fit</button>

                    <div className="errorMsg">{message}</div>
                    <div className={buttonClass}>
                    <button type="button" className="btn btn-secondary backBtn" onClick={() => setCurrentPage(4)}> previous</button>
                        <button type="button" className="btn btn-secondary nextBtn" onClick={async () => userRegisters(answer)}> Find your PT now!</button>
                    </div>
                </div>}


            </form>

        </div>
    )
}