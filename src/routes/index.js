import React, { useState, useEffect, useCallback } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import { useDispatch } from "react-redux";

import IndividualApi from "../library/api/individual-api";
import { getAllIndividual } from "../redux/individual/actions";

const MainRoute = () => {
  const dispatch = useDispatch();
  const getData = useCallback(async() => {
    try {
          const individual = await IndividualApi.getIndividuals();
          await dispatch(getAllIndividual(individual))
      } catch (error) {
          console.log(error.message);
      }
    }, []);
  
  useEffect(() => {
      getData();
  }, [getData])

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