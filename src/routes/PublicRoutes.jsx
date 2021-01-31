import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoutes = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return ( 
        <Route {...rest}
        component={(props)=>(
            (isAuthenticated)
            ?(<Component{...props}/>)
            :(<Component{...props}/>)
        )}
        />
     );
};
 
export default PublicRoutes;