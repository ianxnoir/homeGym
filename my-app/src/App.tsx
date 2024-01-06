import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { Form, FormGroup, Input } from "reactstrap"
import { useForm } from 'react-hook-form'
import { push } from "connected-react-router";
import { Link } from "react-router-dom"


import { RootState } from "./store";
import { checkLogin } from './auth/actions';
import { logout } from './auth/actions'
import { fetchUserInfo } from './redux/user/actions';
import { login } from "./auth/actions"
// import { fetchNotification } from './redux/notification/actions*';


//page
import { HomePage } from './pages/HomePages'
import { PTRegister } from './pages/PTRegses'
import { UserRegister } from './pages/UserRegs'
import { SelectedCourse } from './pages/SelectedCourse'
// import{News} from './pages/Article'
import { Package } from './pages/Packages'
import { Category } from './pages/Categories';
import { Profile } from './pages/Profiles'
import { SearchPages } from './pages/SearchPages'
import { PersonalInfo } from './pages/PersonalInfos';


//css

import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { PTCourse } from './pages/PTCourse';









function App() {

 

  //userstate
  const displayname = useSelector((state: RootState) => state.userReducer.displayname)
  const role = useSelector((state: RootState) => state.userReducer.role)
  const ptId = useSelector((state: RootState) => state.userReducer.pt_id)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //loginform fade in-out
  const [formClass, setFormClass] = useState("translate");
  //update after purchase
  const [purchased, setPurchased] = useState(0)
  //login form result
  const [message, setMessage] = useState("")
  //searchPage
  const [searchTerm, setSearchTerm] = useState("")
  //user-setting update
  const [update, setUpdate] = useState(0)
  //form
  interface ILoginForm {
    email: string,
    password: string,
  }


  const { register, handleSubmit,reset } = useForm<ILoginForm>();


  const onSubmit = async (data: ILoginForm) => {
    if (data.email && data.password) {
      const { email, password } = data;
      let result = await dispatch(login(email, password));
      if (!result) {
        setMessage("Try again")
      } else {
        setMessage("")
        reset()
        dispatch(push("/"))
        setFormClass("translate");
      }
    }
  }




  const dispatch = useDispatch();

  //checklogin every reload
  useEffect(() => {
    dispatch(checkLogin(localStorage.getItem('token')))

    //eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])

  //on user-setting update and login, get user info on nav
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserInfo())
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [isAuthenticated, update])



  return (
    
    
    <div id="app">
      
      <div id="nav">
        <Navbar color="light" light expand="md" className="h-100 navBarColor">
          <NavbarBrand href="/">
     
            <div className="sign">
              <span className="fast-flicker">F</span>E<span className="flicker">V</span>ER
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <NavItem>
                <Link className="nav-link" to={'/'}> Home </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link nav2" to={'/select-pt'}> List of Personal Trainers</Link>

              </NavItem>

              {isAuthenticated === true &&
                <NavItem>
                  <Link className="nav-link nav3" to={'/selected-course'}>Selected Course</Link>
                </NavItem>
              }
{/* 
              {isAuthenticated === true &&
                <NavItem>
                  <Link className="nav-link" to={'/news'}>News</Link>
                </NavItem>
              } */}


              {isAuthenticated === true &&
                <NavItem>
                  <Link className="nav-link nav3" to={'/package'}>Top Up</Link>
                </NavItem>
              }

              
     

                  <div className="searchBox2">
                  <input type="text" className="searchT" value={searchTerm } onChange={(e)=>setSearchTerm(e.currentTarget.value)}></input>
                  <div className="searchB" onClick={()=>dispatch(push(`/search/${searchTerm}`))}>
                    <FontAwesomeIcon className="searchFont"icon={faSearch}></FontAwesomeIcon>
                  </div>

                  </div>


             


              {isAuthenticated === true ?
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="reverse" nav caret>
                    Hi, {displayname}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {isAuthenticated === true &&
                      <DropdownItem>

                        <Link className="nav-drop" to={'/personalInfo/'}>Account Settings</Link>
                      </DropdownItem>}

                    {role === "pt" &&
                      <DropdownItem>
                        <Link className="nav-drop" to={`/register-course-list/${ptId}`}>Registered Course Lists</Link>
                      </DropdownItem>

                    }

                    {role === "pt" &&
                      <DropdownItem>
                        <Link className="nav-drop" to={{
                          pathname: `/pt-profile/${ptId}`,

                        }}> PT Profile </Link>
                      </DropdownItem>
                    }



                    <DropdownItem divider />
                    <DropdownItem>
                      <div className="nav-drop" onClick={() => {
                        dispatch(logout())
                        dispatch(push('/'))
                      }}>Logout</div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                :
                <NavItem>
                  <div id="loginNav" className="nav-link" onClick={() => setFormClass("")}>Login</div>
                </NavItem>
              }


            </Nav>


          </Collapse>
        </Navbar>
      </div>

      <div id="all-page" className="">

        <div className="wrapper">

          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        </div>




        <Switch>
          <Route path='/' exact> <HomePage /></Route>
          <Route path="/register/pt" > <PTRegister /></Route>
          <Route path="/register/student"><UserRegister /></Route>
          <Route path="/pt-profile/:id"><Profile/></Route>
     
          <Route path="/select-pt/:activeKey" exact={true} ><Category /></Route>
          <Route path="/select-pt/" exact={true} ><Category /></Route>
          {isAuthenticated === true && <Route path="/selected-course"><SelectedCourse /></Route>}
          {isAuthenticated === true && <Route path="/package"><Package purchased={() => setPurchased(purchased + 1)} /></Route>}
          {isAuthenticated === true && <Route path="/personalInfo"><PersonalInfo update={() => setUpdate(update + 1)} /></Route>}

          {role === "pt" && <Route path="/register-course-list"><PTCourse /></Route>}
          <Route path="/search/:searchTerm"><SearchPages /></Route>
          {/* {isAuthenticated === true && <Route><News/></Route>} */}

        </Switch>

          <div className="p-4"></div>

        <div id="formshadow" className={formClass}>

          <Form id="login-form" onSubmit={handleSubmit(onSubmit)}>

            <div className="loginbox">
              <div onClick={() => setFormClass("translate")}> <FontAwesomeIcon className="closeBtn" icon={faTimes}></FontAwesomeIcon></div>
              <span className="title"><h4 className="loginTitle">Login</h4></span>

              <FormGroup className="inputBox">

                <Input className="inbox" type="email"
                  name="email"
                  placeholder="Email"
                  innerRef={register} />


                <Input className="inbox2" type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="on"
                  innerRef={register} />

              </FormGroup >
              <div>{message}.</div>
              <div className="msgMargin">
                <span>Forget Passwords</span><br />

                <Input className="login" type='submit' value="Login" />
                <div>
                  <span className="title2"><h2>Register As</h2></span>

                <div className="displayFlexC">

                  <div className="ptRegister ptBtn" onClick={(event) => {
                    event?.stopPropagation()
                    dispatch(push('/register/pt'))
                    setFormClass("translate")
                  }

                  }>Personal Trainer</div>

                  <div className="ptRegister studentBtn" onClick={(event) => {
                    event?.stopPropagation()
                    dispatch(push('/register/student'))
                    setFormClass("translate")
                  }}>Student</div>

                  </div>

                </div>
              </div>

            </div>
          </Form>


        </div>

      </div >


    </div >
  );
}

export default App;


// # server-testing:
// #   services:
// #     - postgres:latest

// #   before_script:
// #     - cd backend
// #     - yarn install
// #     - yarn knex migrate:latest --env testing
// #   stage: server-testing
// #   only:
// #     - production
// #   script:
// #     - yarn jest