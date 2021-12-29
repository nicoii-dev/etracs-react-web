import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";

import About from '../pages/user/About';
import Error404 from '../pages/error/Error404';
import Profile from '../pages/user/Profile';
import UserIndex from '../pages/user';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserIndex />}>
                <Route path="/profile" element = {<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>

    )
}

export default UserRoutes;