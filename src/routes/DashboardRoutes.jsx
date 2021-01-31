import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from '../views/Login/LoginScreen';
import ProductsScreen from '../views/ProductScreen/ProductsScreen';
import HomeScreen from '../views/HomeScreen/HomeScreen';

const DashboardRoutes = () => {
    return ( 
        <Fragment>
            <div>
                <Switch>
                        <Route exact path="/public/home" component={HomeScreen}/>
                        <Route exact path='/public/publications' component={ProductsScreen}/>
                        <Route exact path='/public/login' component={LoginScreen}/>
                    <Redirect to="/public/login"/>

                </Switch>
            </div>
        </Fragment>
     );
}
 
export default DashboardRoutes;