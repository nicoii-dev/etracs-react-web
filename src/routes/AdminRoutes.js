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
import Error404 from '../pages/error/Error404';
import IndividualPage from '../pages/entity/individual';
import JuridicalPage from '../pages/entity/juridical';
import MultiplePage from '../pages/entity/multiple';
import ReconcilePage from '../pages/entity/reconcile';
import DataCapturePage from '../pages/faas/data-capture';
import MunicipalityCityPage from '../pages/utilities/municipality-city';
import AccountsPage from '../pages/accounts';
import PersonnelPage from '../pages/personnel';
import JobPositionPage from '../pages/job-position';

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
                <Route path="faas/data-capture" element={<DataCapturePage />} />
                <Route path="generalrevision/land" element={<LandRevision />} />
                <Route path="utilities/municipality-city" element={<MunicipalityCityPage />} />
                <Route path="utilities/personnels" element={<PersonnelPage />} />
                <Route path="utilities/accounts" element={<AccountsPage />} />
                <Route path="utilities/job-position" element={<JobPositionPage />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>

    )
}

export default AdminRoutes;