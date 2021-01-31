import React from 'react';
import {Route,Redirect}from 'react-router-dom';
const PrivateRoutes = ({
    isAuthenticated,
    component:Component,
    ...rest
})=>{
    return(
        <Route {...rest} component={(props)=>(isAuthenticated)?
            (<Component{...props}/>)
            :(<Redirect to="/public/login"/>)
            }
        />
    )
}
 
export default PrivateRoutes;