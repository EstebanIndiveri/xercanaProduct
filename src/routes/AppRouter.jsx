import React, { Fragment,useContext } from 'react';
import {LoginContext} from '../context/login-context'; 
import {HashRouter as Router,Redirect,Switch} from "react-router-dom";

// unlogin routes
import PublicRoutes from './PublicRoutes';
// Login routes:
import PrivateRoutes from './PrivateRoutes';
// Views
import DashboardRoutes from './DashboardRoutes';
import Nabvar from '../components/Nabvar/Nabvar';
import AuthRoutes from './AuthRoutes';

const AppRouter = () => {

    const {user} =useContext(LoginContext);
    let isLogin=user.name.length || false;
    return ( 
        <Fragment>
            <Router>
                <div>
                    <Nabvar/>
                    <Switch>
                        <PublicRoutes isAuthenticated={isLogin} path="/public" component={DashboardRoutes}/>
                        <PrivateRoutes isAuthenticated={isLogin} path="/admin" component={AuthRoutes}/>
                        <Redirect to="/public"/>                        
                    </Switch>
                </div>
            </Router>
        </Fragment>
     );
}
 
export default AppRouter;

