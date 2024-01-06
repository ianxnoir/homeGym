// import { push } from "connected-react-router";
// import { Hash } from "crypto";
import { Dispatch } from "react";
import dotenv from 'dotenv';
import { RootState } from "../../store";
dotenv.config()

//action
// export function setUser(username:string,email:string, password:Hash){
//    return async(dispatch:Dispatch<any>)=>{
//       const res =await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`,{
//          method:'POST',
//          headers:{
//             'Content-Type:':'application/json'
//          },
//          body:JSON.stringify({
//             username,
//             email,
//             password
//          })
//       })


//       type: "SET_USER" as "SET_USER",
//       username,
//       email,
//       password

//    }
// }

// export function login(email:string,password:string){
//    return async (dispatch: Dispatch<UserAction>)=>{
//        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`,{
//            method:"POST",
//            headers:{
//                "Content-Type":"application/json"
//            },
//            body: JSON.stringify({email,password})
//        });

//        const result = await res.json();

//        if(res.status != 200){
//            dispatch(failed("LOGIN_FAILED",result.msg));
//        }else{
//            localStorage.setItem('token',result.token);
//            dispatch(loginSuccess());
//            dispatch(push("/"));
//        }
//    }
// }

// export function logout(){
//    return async (dispatch:Dispatch<UserAction>)=>{
//        dispatch(logoutSuccess());
//        localStorage.removeItem('token');
//        dispatch(push('/'));
//    }
// }


export function getUserInfo(
   id: number,
   displayname: string,
   email: string,
   role: string,
   height: number,
   weight: number,
   frequency_id: number,
   focus_id:number,
   goal_id:number,
   gender:string,
   pt_id:number|null

) {

   return {
      type: '@@user/getuserinfo' as '@@user/getuserinfo',
      id,
      displayname,
      email,
      role,
      height,
      weight,
      frequency_id,
      focus_id,
      goal_id,
      gender,
      pt_id


   }
}




export function clearUserInfo() {

   return {
      type: "@@user/clearuserinfo"
   }
}


export function fetchUserInfo() {
   return async (dispatch: Dispatch<any>, getState: () => RootState) => {

      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/currentUser`,
         {
            headers: {
               'Authorization': 'Bearer ' + getState().auth.token
            }
         })
      const userInfo = await res.json();

      if (userInfo.displayname) {
         dispatch(getUserInfo(userInfo.id,
            userInfo.displayname,
            userInfo.email,
            userInfo.role,
            userInfo.height,
            userInfo.weight,
            userInfo.frequency_id,
            userInfo.focus_id,
            userInfo.goal_id,
            userInfo.gender,
            userInfo.pt_id

         ))
      }
   }
}


export type UserAction = ReturnType<typeof getUserInfo>



