// import { push } from "connected-react-router"
import { Dispatch } from "redux"
import{clearUserInfo} from '../redux/user/actions'
export function loginSuccess(token: string) {
  return {
    type: '@@auth/LOGIN_SUCCESS' as '@@auth/LOGIN_SUCCESS',
    token
  }
}

export function loginFailed() {
  return {
    type: '@@auth/LOGIN_FAILED' as '@@auth/LOGIN_FAILED'
  }
}

export function logoutSuccess() {
  return {
    type: '@@auth/LOGOUT_SUCCESS' as '@@auth/LOGOUT_SUCCESS'
  }
}

export type AuthActions = ReturnType<typeof loginSuccess> |
                          ReturnType<typeof loginFailed> |
                          ReturnType<typeof logoutSuccess> 

export function login(email: string, password: string) {
  return async (dispatch: Dispatch<any>) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const json = await res.json();
    if (json.token) {
      localStorage.setItem('token', json.token)
      dispatch(loginSuccess(json.token))
      return true
    } 
      dispatch(loginFailed())
      return false
    
  }
}

export function checkLogin(token?: string | null) {
  return async (dispatch: Dispatch<any>) => {
    if (token == null) {
      dispatch(logoutSuccess())
      return;
    }
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/currentUser`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    })
    const json = await res.json();
    if (json.displayname) {
      dispatch(loginSuccess(token))
    } else {
      dispatch(logoutSuccess())
    }
  }
}


export function logout(){
  return async (dispatch: Dispatch<any>) => {
    window.localStorage.clear();
    localStorage.getItem("token")
    dispatch(logoutSuccess())
    dispatch(clearUserInfo())
  }
}