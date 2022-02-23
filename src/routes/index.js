import React, { useState, useEffect, useCallback } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import { useDispatch } from "react-redux";

import IndividualApi from "../library/api/individual-api";
import { getIndividuals } from "../redux/individual/actions";

const MainRoute = () => {

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