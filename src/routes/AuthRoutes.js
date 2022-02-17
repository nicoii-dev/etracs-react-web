import React, { useState } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
  
// * pages
import LoginUser from '../pages/auth/LoginUser';
import Error404 from '../pages/error/Error404';
import CreateUser from '../pages/auth/CreateUser';

const AuthRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<LoginUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="*" element={<Error404 />} />
        </Routes>

    )
}

export default AuthRoutes;