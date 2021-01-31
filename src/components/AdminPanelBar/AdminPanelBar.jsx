import React, { Fragment } from 'react';
import menu from '../../assets/menu.svg';
import './AdminPanelBar.css';

const AdminPanelBar = ({handleMenuScroll}) => {
    return ( 
        <Fragment>
            <div className="adminPanel_Wizard" >
                    <nav className="adminPanel_NavbarContainer">
                        <img onClick={handleMenuScroll} className="adminPanel_menuScroll" src={menu} alt=""/>
                        <h2 className="adminPanel_title">Admin your products</h2>
                            <ul className="adminPanel_ListContainer" >
                                <li className="adminPanel_ListItem" >My products</li>
                                <li  className="adminPanel_ListItem" >Ready to send</li>
                                <li className="adminPanel_ListItem">In process</li>
                                <li className="adminPanel_ListItem">Canceled</li>
                            </ul>
                    </nav>
                </div>
        </Fragment>
     );
}
 
export default AdminPanelBar;