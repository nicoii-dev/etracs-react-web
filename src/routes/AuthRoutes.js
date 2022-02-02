import React, { useState } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
  
// * pages
import LoginUser from '../pages/auth/LoginUser';
import Error404 from '../pages/error/Error404';

const AuthRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<LoginUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="*" element={<Error404 />} />
        </Routes>

    )
}

export default AuthRoutes;