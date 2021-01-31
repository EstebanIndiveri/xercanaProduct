import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminPanel from '../views/AdminPanel/AdminPanel';
import ProductEdit from '../views/ProductEdit/ProductEdit';

const AuthRoutes = () => {
    return ( 
        <Fragment>
            <div>
                <Switch>
                        <Route exact path="/admin/products/:page" component={AdminPanel}/>
                        <Route exact path="/admin/product/:id" component={ProductEdit}/>
                        <Route exact path="/admin/product/new" component={ProductEdit}/>
                    <Redirect to="/public/login"/>

                </Switch>
            </div>
        </Fragment>
     );
}
 
export default AuthRoutes;