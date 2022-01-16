import React, { useState } from 'react';
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
// * layout
import AdminLayout from '../layout/AdminLayout';

// * pages
import Dashboard from '../pages/admin/Dashboard';
import OfflineTransaction from '../pages/admin/OfflineTransaction';
import OnlineTransaction from '../pages/admin/OnlineTransaction';
import Reports from '../pages/admin/Reports';
import Error404 from '../pages/error/Error404';

const AdminRoutes = () => {
    return (

        <Routes>
            <Route path="/" element = {<AdminLayout />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="reports" element={<Reports />} />
                <Route path="transaction/online" element={<OnlineTransaction />} />
                <Route path="transaction/offline" element={<OfflineTransaction />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>

    )
}

export default AdminRoutes;