import React, { createContext,useState } from 'react';

 export const LoginContext=createContext({name:'',auth:false});


export const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ name: JSON.parse(localStorage.getItem('name')) || '', auth: true });
  
    // Login updates the user data with a name parameter
    const login = (name) => {
      setUser((user) => ({
        name: name,
        auth: true,
      }));
    };
  
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        name: '',
        auth: false,
      }));
      localStorage.removeItem('name');
      localStorage.removeItem('email');

    };
  
    return (
      <LoginContext.Provider value={{ user, login, logout }}>
        {children}
      </LoginContext.Provider>
    );
  }