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
import ForgotPassword from '../pages/auth/ForgotPass';
import ResetPassword from '../pages/auth/ResetPass';

const AuthRoutes = () => {
    const location = useLocation();
    // <Route path="/resetpass-token=" element={<ResetPassword />} />
    const currentLocation = location.pathname.toLocaleLowerCase();
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginUser />} />
                <Route path="/createuser" element={<CreateUser />} />
                <Route path="/forgotpass" element={<ForgotPassword />} />
                <Route path="/resetpass/token/:token" element={<ResetPassword />} />
                <Route path="*" element={<Navigate to="/login" state={{ from: location }} replace />} />
                {/* <Route path="*" element={<Navigate to="/login" state={{ from: location }} replace />} /> */}
            </Routes>
        </>
    )
}

export default AuthRoutes;