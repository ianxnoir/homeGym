import { useSelector } from 'react-redux';
import React from 'react'
import { RootState } from './store';
import {Redirect,Route,RouteProps} from 'react-router-dom'




export function PrivateRoute({ component, ...rest }: RouteProps){
    const isAuthenticated = useSelector((state:RootState)=>state.auth.isAuthenticated);
    const Component = component;
    if (Component == null) {
        return null;
    }
    let render:(props:any)=>JSX.Element 
    if(isAuthenticated){
        render = (props:any)=>(
            <Component {...props} />
        )    
    }else{
        render = (props:any)=>(
            <Redirect to={ {
                pathname: '/login',
                state: { from: props.location }
            } } />
        )
    }
    return <Route {...rest} render={render}/>    
};