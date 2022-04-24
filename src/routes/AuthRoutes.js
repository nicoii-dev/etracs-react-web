import React, { useState } from 'react';
import {
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";

// * pages
import LoginUser from '../pages/auth/LoginUser';
import Error404 from '../pages/error/Error404';
import CreateUser from '../pages/auth/CreateUser';

const AuthRoutes = () => {
    const location = useLocation();

    return (
        <Routes>
            <Route path="/login" element={<LoginUser />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/forgotpass" element={<CreateUser />} />
            <Route path="*" element={<Navigate to="/login" state={{ from: location }} replace />} />
        </Routes>
    )
}

export default AuthRoutes;