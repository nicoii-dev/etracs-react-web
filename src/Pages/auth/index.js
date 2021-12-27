import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import LoginUser from './LoginUser';
import CreateUser from './CreateUser';
import ForgotPass from './ForgotPass';

const Authentication = ({ ...props }) => {
    return (
       <Router>
           <Routes>
               <Route path = "/" element = {<LoginUser />} />
               <Route path = "/createuser" element = {<CreateUser />} />
               <Route path = "/forgotpass" element = {<ForgotPass />} />
           </Routes>
       </Router>
    );
}

export default Authentication;