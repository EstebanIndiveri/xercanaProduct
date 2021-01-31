import React, { Fragment,useContext,useState } from 'react';
import {LoginContext} from '../../context/login-context'; 
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useHistory} from 'react-router-dom'
import './LoginScreen.css';
import { isEmail } from '../../helpers/validations';

const LoginScreen = () => {
    const {login,user} =useContext(LoginContext);
    const [name,setName]=useLocalStorage('name','');
    const [email,setEmail]=useLocalStorage('email','');
    const [showWarningModal, setShowWarningModal] = useState(false)

    const history=useHistory();

    // validate form
    const handleChange=()=>{
        if(name===''||email===''||isEmail(email)===false){
            setShowWarningModal(true);
            setTimeout(() => {
                setShowWarningModal(false);
            }, 2000);
            return;
        }else{
            setShowWarningModal(false);
            login(name)
            history.push('/public/home')
        }
    };
    if(user.name) history.push('/public/home');
    return ( 
        <Fragment>
            <div className="containerLogin">
                
                <h1 className="titleLogin">Welcome to La more E-Commerce</h1>
                    <div className="formLogin">
                    {showWarningModal &&(
                    <div className="formLogin_modalAlert">Name and email are required</div>
                    )}
                            <input
                            className="formLogin_input"
                            placeholder='Your Name'
                            type="text"
                            onChange={(event)=>{
                                setName(event.target.value);
                            }}
                            />
                            <input
                            className="formLogin_input"
                            placeholder='Your Email'
                            type="email"
                            required
                            onChange={(event)=>{
                                setEmail(event.target.value);
                            }}
                            />
                            <button className="formLogin_btn" onClick={handleChange}>Log In</button>
                            {name &&
                            (
                                <h3 className="formLogin_message">Nice to see you again: {name} 🎉!</h3>
                            )}
                    </div>
            </div>
        </Fragment>
     );
}
 
export default LoginScreen;