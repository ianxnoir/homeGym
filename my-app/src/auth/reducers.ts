import { AuthActions } from "./actions"

export interface IAuthState {
  isAuthenticated: boolean | null
  token: string | null
}

const initialState: IAuthState = {
  isAuthenticated: false,
  token: null
}

export const authReducer = (state: IAuthState = initialState, action: AuthActions): IAuthState => {
  if (action.type === '@@auth/LOGIN_SUCCESS') {
    return {
      ...state,
      isAuthenticated: true,
      token: action.token
    }
  } else if (action.type === '@@auth/LOGOUT_SUCCESS') {
    return {
      ...state,
      isAuthenticated: false,
      token: null
    }
  }

  return state;
}

