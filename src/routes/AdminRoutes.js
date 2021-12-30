import React, { useState } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import AdminIndex from '../pages/admin';

import Dashboard from '../pages/admin/Dashboard';
import OfflineTransaction from '../pages/admin/OfflineTransaction';
import OnlineTransaction from '../pages/admin/OnlineTransaction';
import Reports from '../pages/admin/Reports';
import Error404 from '../pages/error/Error404';

const AdminRoutes = () => {
    return (

        <Routes>
            <Route path="/" element = {<AdminIndex />} >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="reports" element={<Reports />} />
                <Route path="transaction/online" element={<OnlineTransaction />} />
                <Route path="transaction/offline" element={<OfflineTransaction />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>

    )
}

export default AdminRoutes;