import React, { Fragment,useContext,useState } from 'react';
import {LoginContext} from '../../context/login-context'; 
import { NavLink } from 'react-router-dom';
import menu from '../../assets/menu.svg'
import logoTitle from '../../assets/logoTitle.png'
import profile from '../../assets/profile.webp'
import './Navbar.css';

const Nabvar = () => {
    const {user,logout} =useContext(LoginContext);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen=()=>{
        setIsOpen(!isOpen);
        if(isOpen){
            document.querySelector('.nabvar').classList.remove('opened');
        }else{
            document.querySelector('.nabvar').classList.add('opened');
        }
    };

    return ( 
        <Fragment>
            <nav className="nabvar">
                <div className="logoImageContainer"><img className="logoImage" src={logoTitle} alt=""></img></div>
                    <ul className="listMenu">
                        <li><NavLink exact={true} to="/public/home" activeClassName="activeMenu">home</NavLink></li>
                        <li><NavLink exact={true} to="/public/publications" activeClassName="activeMenu">Products</NavLink></li>
                        {user.name?(
                            <li><NavLink exact={true} to="/admin/products/1" activeClassName="activeMenu">Admin</NavLink></li>
                        ):
                        null}
                        {user.name?
                        (<li className="logout_btn" onClick={()=>logout()}>Logout</li>)
                        :
                        (<li><NavLink exact={true} to="/public/login" activeClassName="activeMenu">Login</NavLink></li>)
                        }    
                    </ul>
                    
                    {user.name&&(<img  className="profileImage" src={profile} alt="" height="40px"/>)}
                    
                <img onClick={handleOpen} className="menuicon" src={menu} alt="" />
            </nav>
        </Fragment>
     );
}
 
export default Nabvar;