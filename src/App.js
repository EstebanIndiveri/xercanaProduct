import React, { Fragment } from 'react'
import{BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './routes/AppRouter';
import {UserProvider} from './context/login-context';
import './app.css';
import './normalize.css';

function App() {
  return (
    <Fragment>
      <UserProvider>
        <Router>
          <AppRouter/>
        </Router>
      </UserProvider>
    </Fragment>
  );
}

export default App;
