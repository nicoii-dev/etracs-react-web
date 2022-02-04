import React, { useState } from 'react';
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
// * layout
import _Layout from '../layout';

// * pages
import Dashboard from '../pages/admin/Dashboard';
import OnlineTransaction from '../pages/admin/OnlineTransaction';
import OfflineTransaction from '../pages/admin/OfflineTransaction';
import LandRevision from '../pages/common/general-revision/land';
import Reports from '../pages/admin/Reports';
import Error404 from '../pages/error/Error404';

const AdminRoutes = () => {
    return (

        <Routes>
            <Route path="/" element = {<_Layout />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="reports" element={<Reports />} />
                <Route path="transaction/online" element={<OnlineTransaction />} />
                <Route path="transaction/offline" element={<OfflineTransaction />} />
                <Route path="generalrevision/land" element={<LandRevision />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>

    )
}

export default AdminRoutes;