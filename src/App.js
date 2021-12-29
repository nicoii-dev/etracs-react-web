import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import LoginUser from "./pages/auth/LoginUser";
import CreateUser from "./pages/auth/CreateUser";
import AdminIndex from "./pages/admin";

import Profile from './pages/user/Profile'
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
