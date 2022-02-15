import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
// * layout
import _Layout from '../layout';

// * pages
import Dashboard from '../pages/admin/Dashboard';
import LandRevision from '../pages/general-revision/land';
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
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="entity/individual" element={<IndividualPage />} />
                <Route path="entity/juridical" element={<JuridicalPage />} />
                <Route path="entity/multiple" element={<MultiplePage />} />
                <Route path="entity/reconcile" element={<ReconcilePage />} />
                <Route path="generalrevision/land" element={<LandRevision />} />
                <Route path="reports" element={<Reports />} />
                
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>

    )
}

export default AdminRoutes;