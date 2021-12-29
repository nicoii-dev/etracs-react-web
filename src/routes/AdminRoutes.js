import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";
import AdminIndex from '../pages/admin';

import Dashboard from '../pages/admin/Dashboard';
import Reports from '../pages/admin/Reports';
import Error404 from '../pages/error/Error404';

const AdminRoutes = () => {
    return (

        <Routes>
            <Route path="/" element = {<AdminIndex />} >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>

    )
}

export default AdminRoutes;