import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


import AuthRoutes from "./routes/AuthRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";


function App() {

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
   
  )
}

export default App;
