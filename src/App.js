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
import Home from "./pages/Home";

import Profile from "./pages/user/Profile";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";

function App() {

  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(true);
  return (
    <div>
      <Router>
        <Routes>
          {!auth && (
            <Route path="/login" element={<LoginUser />} />
          )}

        {admin && (
          <>     
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/admin" element={<AdminIndex props={<Home />}/>} />
          </>
        )}

        {user && (
            <>     
              <Route path="/profile" element={<Profile />} />
            </>
          )}


          <Route path="*" element={<Navigate to={auth? "/admin" : "/login"} />} />

        </Routes>
      </Router>

    </div>
   
    
  )

}

export default App;
