import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";



import LoginUser from "./pages/auth/LoginUser";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import Error404 from "./pages/error/Error404";

function App() {

  const [auth, setAuth] = useState(true);
  const [admin, setAdmin] = useState(true);
  const [user, setUser] = useState(false);

  return (
    <div>
      <Router>

        {!auth && 
          (<Routes>
            <Route path="/" element={<LoginUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="*" element={<Error404 />} />
          </Routes>)}
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
