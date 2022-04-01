import React, { useState, useEffect, useCallback } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import { useDispatch } from "react-redux";

// redux
import { fetchIndividualRedux } from "../redux/individual/actions";
import { fetchJuridicalRedux } from "../redux/juridical/actions";
import { fetchMultipleRedux } from "../redux/multiple/actions";
import { fetchMunicipalityCity } from "../redux/municipality-city/actions";
import { fetchBarangayRedux } from "../redux/barangay/action";
import { fetchClassificationRedux } from "../redux/classification/actions";
import { fetchAssessmentLevelRedux } from "../redux/assessment-levels/actions";

const MainRoute = () => {
  const dispatch = useDispatch();

  const fetchData = useCallback( async() => {
      await dispatch(fetchIndividualRedux());
      await dispatch(fetchJuridicalRedux());
      await dispatch(fetchMultipleRedux());
      await dispatch(fetchMunicipalityCity());
      await dispatch(fetchBarangayRedux());
      await dispatch(fetchClassificationRedux());
      await dispatch(fetchAssessmentLevelRedux())
  }, [dispatch])

  useEffect(() => {
      fetchData()
  }, [fetchData])

    const [auth, setAuth] = useState(true);
    const [admin, setAdmin] = useState(true);
    const [user, setUser] = useState(false);
    
    return (
      <div>
        <Router>
  
          {!auth && 
           (<AuthRoutes />)  
          }
          {auth && user && 
            (
              <UserRoutes />
            )}
          {auth && admin && 
            (
              <AdminRoutes />
            )}
          
        </Router>
      </div>
    );
};

export default MainRoute;