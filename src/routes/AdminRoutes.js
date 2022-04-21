import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

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
import FaasPage from '../pages/faasV2';

// redux
import { fetchIndividualRedux } from "../redux/individual/actions";
import { fetchJuridicalRedux } from "../redux/juridical/actions";
import { fetchMultipleRedux } from "../redux/multiple/actions";
import { fetchMunicipalityCity } from "../redux/municipality-city/actions";
import { fetchBarangayRedux } from "../redux/barangay/action";
import { fetchClassificationRedux } from "../redux/classification/actions";
import { fetchAssessmentLevelRedux } from "../redux/assessment-levels/actions";
import { fetchPersonnelRedux } from "../redux/personnel/actions";
import { fetchAccountsRedux } from '../redux/accounts/actions';
import { fetchRevisionYearRedux } from '../redux/revision-year/action';


const AdminRoutes = () => {
    const dispatch = useDispatch();

    const fetchData = React.useCallback(async () => {
        await dispatch(fetchPersonnelRedux());
        await dispatch(fetchIndividualRedux());
        await dispatch(fetchJuridicalRedux());
        await dispatch(fetchMultipleRedux());
        await dispatch(fetchMunicipalityCity());
        await dispatch(fetchBarangayRedux());
        await dispatch(fetchClassificationRedux());
        await dispatch(fetchAssessmentLevelRedux());
        await dispatch(fetchAccountsRedux());
        await dispatch(fetchRevisionYearRedux());
    }, [dispatch])

    React.useEffect(() => {
        fetchData()
        console.log("fetch execute")
    }, [fetchData])

    return (
        <>
            {JSON.parse(localStorage?.getItem("user")).user.role === "ADMIN" ?
                <Routes>
                    <Route path="/" element={<_Layout />} >
                        <Route path="/" element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="entity/individual" element={<IndividualPage />} />
                        <Route path="entity/juridical" element={<JuridicalPage />} />
                        <Route path="entity/multiple" element={<MultiplePage />} />
                        <Route path="entity/reconcile" element={<ReconcilePage />} />

                        <Route path="faas" element={<FaasPage />} />
                        <Route path="faas/data-capture" element={<DataCapturePage />} />

                        <Route path="generalrevision/land" element={<LandRevision />} />
                        <Route path="utilities/municipality-city" element={<MunicipalityCityPage />} />
                        <Route path="utilities/personnels" element={<PersonnelPage />} />
                        <Route path="utilities/accounts" element={<AccountsPage />} />
                        <Route path="utilities/job-position" element={<JobPositionPage />} />

                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

                : JSON.parse(localStorage?.getItem("user")).user.role === "APPRAISER" ?
                    <Routes>
                        <Route path="/" element={<_Layout />} >
                            <Route path="/" element={<FaasPage />} />
                            <Route path="entity/individual" element={<IndividualPage />} />
                            <Route path="entity/juridical" element={<JuridicalPage />} />
                            <Route path="entity/multiple" element={<MultiplePage />} />
                            <Route path="entity/reconcile" element={<ReconcilePage />} />
                            <Route path="faas" element={<FaasPage />} />
                            <Route path="faas/data-capture" element={<DataCapturePage />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    : JSON.parse(localStorage?.getItem("user")).user.role === "APPROVER" ?

                        <Routes>
                            <Route path="/" element={<_Layout />} >
                                <Route path="/" element={<FaasPage />} />
                                <Route path="entity/individual" element={<IndividualPage />} />
                                <Route path="entity/juridical" element={<JuridicalPage />} />
                                <Route path="entity/multiple" element={<MultiplePage />} />
                                <Route path="entity/reconcile" element={<ReconcilePage />} />
                                <Route path="faas" element={<FaasPage />} />
                                <Route path="faas/data-capture" element={<DataCapturePage />} />
                            </Route>
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                        :

                        <Routes>
                            <Route path="/" element={<_Layout />} >
                                <Route path="faas" element={<FaasPage />} />
                                <Route path="faas/data-capture" element={<DataCapturePage />} />
                            </Route>
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
            }
        </>
    )
}

export default AdminRoutes;