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
import IndividualPage from '../pages/entity/individual';
import JuridicalPage from '../pages/entity/juridical';
import MultiplePage from '../pages/entity/multiple';
import ReconcilePage from '../pages/entity/reconcile';

const AdminRoutes = () => {
    return (

        <Routes>
            <Route path="/" element = {<_Layout />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="entity/individual" element={<IndividualPage />} />
                <Route path="entity/juridical" element={<JuridicalPage />} />
                <Route path="entity/multiple" element={<MultiplePage />} />
                <Route path="entity/reconcile" element={<ReconcilePage />} />
                <Route path="generalrevision/land" element={<LandRevision />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>

    )
}

export default AdminRoutes;